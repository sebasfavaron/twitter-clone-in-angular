import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Post, PostsApiParams } from '../../types';
import { safeUrl } from '../../utils';
import { TokenService } from '../token/token.service';

const postsRoute = `${environment.apiUrl}/post`;

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  refreshFlag = false;
  homePosts: Post[] = [];

  constructor(private http: HttpClient, private tokenService: TokenService) {}

  refreshPosts(postsParams: PostsApiParams) {
    const token = this.tokenService.getToken();
    if (!token) return of([]);

    return this.http
      .get<Post[]>(safeUrl(`${postsRoute}`, postsParams), {
        headers: { Authorization: `Bearer ${token}` },
      })
      .pipe(
        tap({
          next: (posts) => {
            this.homePosts = posts;
            this.refreshFlag = false;
          },
          error: (error) => {
            console.error('Error getting posts:', error);
          },
        })
      );
  }

  getPosts({
    postsParams,
    fetchNewPosts = false,
  }: {
    postsParams: PostsApiParams;
    fetchNewPosts?: boolean;
  }) {
    if (fetchNewPosts || this.refreshFlag) {
      return this.refreshPosts(postsParams);
    }
    return of(this.homePosts);
  }

  turnOnRefreshFlag() {
    this.refreshFlag = true;
  }
}
