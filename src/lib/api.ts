import type { Article, Comment, Options } from "./types";
import { formatQueryParams } from "./utils";

const BASE_URL = "https://zsolts-news.onrender.com/api/";

export const fetchArticles = async (options: Options) => {
  try {
    if (!options.queryParams) throw new Error(`Missing query parameters!`);
    const urlToFetch =
      BASE_URL + "articles" + formatQueryParams(options.queryParams);
    const response = await fetch(urlToFetch);
    if (!response.ok) throw new Error(`Response status: ${response.status}`);
    const result = await response.json();
    return result;
  } catch (err) {
    if (err) return { error: err };
  }
};

export const fetchArticleById = async (options: Options) => {
  try {
    if (!options.articleId) throw new Error(`Missing articleId!`);
    const response = await fetch(BASE_URL + "articles/" + options.articleId);
    if (!response.ok) throw new Error(`Response status: ${response.status}`);
    const result = await response.json();
    return result;
  } catch (err) {
    if (err) return { error: err };
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
