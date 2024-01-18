import { JsonPipe, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';
import { PostsService } from '../../services/posts/posts.service';
import { Post, PostsApiParams, getFeedTypeOrDefault } from '../../types';

@Component({
  selector: 'app-home-posts',
  templateUrl: './home-posts.component.html',
  styleUrls: ['./home-posts.component.scss'],
  standalone: true,
  imports: [NgIf, NgFor, JsonPipe],
})
export class HomePostsComponent implements OnInit {
  postsParams: PostsApiParams = {
    type: 'for_you',
    limit: environment.PAGINATED_API_CALLS_LIMIT,
    after: '',
    order: 'desc',
  };
  posts: Post[] = [];

  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.postsParams.type = getFeedTypeOrDefault(params['feed'], 'for_you');
      this.fetchPosts();
    });
  }

  fetchPosts() {
    this.postsService
      .getPosts({ postsParams: this.postsParams, fetchNewPosts: true })
      .subscribe((data) => {
        this.posts = data;
      });
  }
}
