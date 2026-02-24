import type { Article } from "./types";

const BASE_URL = "https://zsolts-news.onrender.com/api/";

export const fetchArticles = async (
  setArticles: (articles: Article[]) => void,
  setLoading: (loading: boolean) => void,
) => {
  try {
    setLoading(true);
    const response = await fetch(BASE_URL + "articles");
    if (!response.ok) throw new Error(`Response status: ${response.status}`);
    const result = await response.json();
    setArticles(result.articles);
  } catch (err) {
    console.log(err);
  } finally {
    setLoading(false);
  }
};

export const fetchArticleById = async (
  articleId: number,
  setArticle: (article: Article) => void,
  setLoading: (loading: boolean) => void,
) => {
  try {
    setLoading(true);
    const response = await fetch(BASE_URL + "articles/" + articleId);
    if (!response.ok) throw new Error(`Response status: ${response.status}`);
    const result = await response.json();
    setArticle(result.article);
  } catch (err) {
    console.log(err);
  } finally {
    setLoading(false);
  }
};
