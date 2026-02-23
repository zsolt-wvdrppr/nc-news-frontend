import type { Article } from "./types";
export const fetchArticles = async (
  setArticles: (articles: Article[]) => void,
  setLoading: (loading: boolean) => void,
) => {
  const baseUrl = "https://zsolts-news.onrender.com/api/";

  try {
    setLoading(true);
    const response = await fetch(baseUrl + "articles");
    if (!response.ok) throw new Error(`Response status: ${response.status}`);
    const result = await response.json();
    setArticles(result.articles);
  } catch (err) {
    console.log(err);
  } finally {
    setLoading(false);
  }
};
