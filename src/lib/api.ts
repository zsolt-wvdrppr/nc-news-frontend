import type { Options } from "./types";
import { formatQueryParams } from "./utils";

const BASE_URL = "https://zsolts-news.onrender.com/ap/";

export const fetchArticles = async (options: Options) => {
  try {
    if (!options.queryParams) throw new Error(`Missing query parameters!`);
    const urlToFetch =
      BASE_URL + "articles" + formatQueryParams(options.queryParams);
    const response = await fetch(urlToFetch);
    if (!response.ok)
      throw new Error(
        `Failed to fetch articles! Response status: ${response.status}`,
      );
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
    if (!response.ok)
      throw new Error(
        `Failed to fetch article by id! Response status: ${response.status}`,
      );
    const result = await response.json();
    return result;
  } catch (err) {
    if (err) return { error: err };
  }
};

export const fetchCommentsByArticleId = async (options: Options) => {
  try {
    if (!options.articleId) throw new Error(`Missing articleId!`);
    const response = await fetch(
      BASE_URL +
        "articles/" +
        options.articleId +
        "/comments" +
        formatQueryParams(options.queryParams || {}),
    );
    if (!response.ok)
      throw new Error(
        `Failed to fetch comments! Response status: ${response.status}`,
      );
    const result = await response.json();
    console.log("res", result);
    return result;
  } catch (err) {
    if (err) return { error: err };
  }
};
