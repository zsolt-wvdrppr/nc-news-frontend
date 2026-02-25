import type { Article, Comment } from "./types";

const BASE_URL = "https://zsolts-news.onrender.com/api/";

export const fetchArticles = async (
  articles: Array<Object>,
  setArticles: (articles: Article[]) => void,
  setLoading: (loading: boolean) => void,
  setTotalCount: (totalCount: number) => void,
  queryParams: Object,
) => {
  const getQueryParams = (queryParams: Object) => {
    if (!queryParams) return "";
    let queryParamsStr = "";
    for (const [key, value] of Object.entries(queryParams)) {
      queryParamsStr += "?" + key + "=" + value;
    }

    return queryParamsStr;
  };

  try {
    setLoading(true);
    const urlToFetch = BASE_URL + "articles" + getQueryParams(queryParams);
    console.log("Fetching", urlToFetch);
    const response = await fetch(urlToFetch);
    if (!response.ok) throw new Error(`Response status: ${response.status}`);
    const result = await response.json();
    const updatedArticles =
      articles ? articles.concat(result.articles) : result.articles;

    setArticles(updatedArticles);
    setTotalCount(result.total_count);
    console.log(result.total_count);
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

export const fetchCommentsByArticleId = async (
  articleId: number,
  comments: Array<Comment>,
  setComments: (comments: Comment[]) => void,
  setLoading: (loading: boolean) => void,
  setTotalCount: (totalCount: number) => void,
  queryParams: Object,
) => {
  const getQueryParams = (queryParams: Object) => {
    if (!queryParams) return "";
    let queryParamsStr = "";
    for (const [key, value] of Object.entries(queryParams)) {
      queryParamsStr += "?" + key + "=" + value;
    }

    return queryParamsStr;
  };

  try {
    setLoading(true);
    const response = await fetch(
      BASE_URL +
        "articles/" +
        articleId +
        "/comments" +
        getQueryParams(queryParams),
    );
    if (!response.ok) throw new Error(`Response status: ${response.status}`);
    const result = await response.json();
    const updatedComments =
      comments ? comments.concat(result.comments) : result.comments;

    setComments(updatedComments);
    setTotalCount(result.total_count);
  } catch (err) {
    console.log(err);
  } finally {
    setLoading(false);
  }
};
