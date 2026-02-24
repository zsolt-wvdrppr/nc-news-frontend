export interface Article {
  article_id: number;
  title: string;
  topic: string;
  author: string;
  created_at: string;
  article_img_url: string;
  votes: number;
}

export interface Page {
  title: string;
  path: string;
}
