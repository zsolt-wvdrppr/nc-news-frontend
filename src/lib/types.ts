export interface ArticleData {
  article_id: number;
  title: string;
  topic: string;
  body: string;
  author: string;
  created_at: string;
  article_img_url: string;
  votes: number;
  comment_count: number;
}

export interface Article {
  type: "article";
  article: ArticleData;
}

export interface ArticleList {
  type: "article-list";
  articles: ArticleData[];
  total_count: number;
}

export interface CommentData {
  comment_id: number;
  article_id: number;
  body: string;
  votes: number;
  author: string;
  created_at: string;
}

export interface Comment {
  type: "comment";
  comment: CommentData;
}

export interface CommentList {
  type: "comment-list";
  comments: CommentData[];
  total_count: number;
}

export interface TopicData {
  slug: string;
  description: string;
  img_url: string;
}

export interface Topic {
  type: "topic";
  topic: TopicData;
}

export interface TopicList {
  type: "topic-list";
  topics: TopicData[];
}

export interface Page {
  type: "page";
  title: string;
  path: string;
}

export interface QueryParams {
  limit?: number;
  p?: number;
  order?: string;
  sortBy?: string;
  topic?: string;
}

export interface RequestBodyType {
  username?: string;
  body: string;
}

export interface Options {
  queryParams?: QueryParams;
  articleId?: string;
  commentId?: number;
  username?: string;
  body?: RequestBodyType;
  url?: string;
  baseUrl?: string;
  method?: string;
  expectedType?:
    | "article-list"
    | "article"
    | "comment"
    | "comment-list"
    | "user"
    | "topic-list";
}

export interface TotalCount {
  type: "total-count";
  total_count: number;
}

export type ContentResponse =
  | Article
  | ArticleList
  | Comment
  | CommentList
  | TotalCount
  | TopicList
  | Topic;

export interface UserType {
  type: "user";
  name: "string";
  username: string;
  avatar_url: string;
}
