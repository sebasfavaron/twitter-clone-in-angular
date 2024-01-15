// import { PostFile } from '../components/FileUploader';

export type SignUpApiParams = {
  email: string;
  username: string;
  password: string;
};
export type SignUpResponse = {
  token: string;
};

export type LogInApiParams = {
  password: string;
  username: string;
  email?: string;
};
export type LogInResponse = {
  token: string;
};

export type Token = string;

export type Reaction = {
  id: string;
  userId: string;
  postId: string;
  like: boolean;
  repost: boolean;
};
export type Post = {
  id: string;
  authorId: string;
  content: string;
  images?: string[];
  createdAt: Date;
  reactions?: Reaction[];
  commentsAmount: number;
};
export type PostApiParams = {
  content: string;
  // images: PostFile[];
  parentId?: string;
};
export type PostApiResponse = Post;

export type DeletePostApiParams = {
  postId: string;
};
export type DeletePostApiResponse = string;

export type ImageApiParams = {
  file: File;
  key: string;
};
export type ImageApiResponse = string;

const feedTypes = ['for_you', 'following'] as const;
export type FeedType = (typeof feedTypes)[number];
const isFeedType = (type: string): type is FeedType =>
  feedTypes.includes(type as FeedType);
export const getFeedTypeOrDefault = (
  type: string | null,
  defaultType: FeedType
): FeedType => {
  type = type ?? '';
  return isFeedType(type) ? type : defaultType;
};

export type PaginatedParams =
  | PaginatedParamsWithAfter
  | PaginatedParamsWithSkip;
export type PaginatedParamsWithSkip = {
  limit: number;
  skip: number;
};
export type PaginatedParamsWithAfter = {
  limit: number;
  after: string;
};
export function isPaginatedParamsWithSkip(
  params: PaginatedParams
): params is PaginatedParamsWithSkip {
  return (params as PaginatedParamsWithSkip).skip !== undefined;
}

export type PostsApiParams = {
  type: FeedType;
  order?: 'desc' | 'asc';
} & PaginatedParamsWithAfter;
export type PostsApiResponse = PostApiResponse[];

export type PostsByUserIdApiParams = {
  userId: string;
} & PaginatedParamsWithAfter;
export type PostsByUserIdApiResponse = PostApiResponse[];

export type PostByIdApiParams = {
  postId: string;
};
export type PostByIdApiResponse = PostApiResponse;

type DateRegistry = {
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
};

type DateRegistryApiResponse = {
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
};

export type Follower = {
  id: string;
  followerId: string;
  followedId: string;
} & DateRegistry;

export type User = {
  id: string;
  username: string;
  name: string;
  createdAt: Date;
  profilePicture?: string;
  followers?: Follower[];
};
export type RecommendedUsersApiParams = {
  username: string;
} & PaginatedParamsWithSkip;
export type RecommendedUsersApiResponse = User[];

export type FollowedUsersApiParams = {
  username: string;
} & PaginatedParamsWithSkip;
export type FollowedUsersApiResponse = User[];

// export type LoggedUserApiParams = Pick<UseQueryOptions, 'enabled'>;

export type UserByIdApiParams = {
  userId: string;
};
export type UserByIdApiResponse = User;

export type UsersByIdApiParams = {
  userIds: string[];
};
export type UsersByIdApiResponse = User[];

// export type ReturnTypeOfMutation<
//   TData = unknown,
//   TVariables = unknown
// > = ReturnType<typeof useMutation<TData, unknown, TVariables, unknown>>;

// export type ReturnTypeOfQuery<
//   TQueryFnData = unknown,
//   TQueryKey extends unknown[] = unknown[]
// > = ReturnType<typeof useQuery<TQueryFnData, unknown, TQueryFnData, TQueryKey>>;

// export type ReturnTypeOfInfiniteQuery<
//   TQueryFnData extends unknown[] = unknown[],
//   TQueryKey extends unknown[] = unknown[]
// > = ReturnType<
//   typeof useInfiniteQuery<
//     InfiniteData<TQueryFnData>,
//     unknown,
//     TQueryFnData,
//     TQueryKey
//   >
// >;

export type NestedKeyOf<T, Delimiter extends string = '.'> = T extends object
  ? {
      [K in keyof T]-?: K extends string
        ? T[K] extends Array<unknown>
          ? `${K}${Delimiter}${NestedKeyOf<T[K][number], Delimiter>}`
          : T[K] extends object
          ? `${K}${Delimiter}${NestedKeyOf<T[K], Delimiter>}` | K
          : K
        : never;
    }[keyof T]
  : '';

export type DeleteUserApiParams = string;
export type DeleteUserApiResponse = void;

export type UpdateReactionQueryParams = Partial<
  Pick<Reaction, 'like' | 'repost'>
>;
export type UpdateReactionApiParams = {
  postId: string;
  newReactionParams: UpdateReactionQueryParams;
};
export type UpdateReactionApiResponse = Reaction;

export type Message = {
  id: string;
  authorId: string;
  content: string;
  files?: string[];
} & DateRegistry;

export type MessageApiResponse = {
  id: string;
  authorId: string;
  content: string;
  files?: string[];
} & DateRegistryApiResponse;

export type Conversation = {
  id: string;
  users: User[];
  messages: Message[];
} & DateRegistry;

export type ConversationApiParams = {
  userIds: string[];
};

export type ConversationApiResponse = {
  id: string;
  users: UserByIdApiResponse[];
  messages: MessageApiResponse[];
} & DateRegistryApiResponse;

export type UpdateConversationApiParams = {
  userIds: string[];
  content: string;
};

export type FollowUserApiParams = {
  userId: string;
  follow: boolean;
};
export type FollowUserApiResponse = void;
