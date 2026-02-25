export interface Article {
  article_id: number;
  title: string;
  topic: string;
  body: string;
  author: string;
  created_at: string;
  article_img_url: string;
  votes: number;
}

export interface Comment {
  comment_id: number;
  article_id: number;
  body: string;
  votes: number;
  author: string;
  created_at: string;
}

export interface Page {
  title: string;
  path: string;
}
