import type { Options } from "./types";
import { buildURL } from "./utils";

const BASE_URL = "https://zsolts-news.onrender.com/api";

export const fetchArticles = async (options: Options) => {
  options.baseUrl = BASE_URL;
  options.url = ":baseUrl/articles";

  try {
    if (!options.queryParams) throw new Error(`Missing query parameters!`);

    const response = await fetch(buildURL(options));
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
  options.baseUrl = BASE_URL;
  options.url = ":baseUrl/articles/:article_id";

  try {
    if (!options.articleId) throw new Error(`Missing articleId!`);
    const response = await fetch(buildURL(options));
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
  options.baseUrl = BASE_URL;
  options.url = ":baseUrl/articles/:article_id/comments";

  try {
    if (!options.articleId) throw new Error(`Missing articleId!`);
    const response = await fetch(buildURL(options));
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

export const patchVote = async (options: Options) => {
  const method = "PATCH";
  const headers = { "Content-Type": "application/json" };

  options.baseUrl = BASE_URL;

  try {
    if (!options.url) throw new Error(`Missing url!`);
    if (!options.body) throw new Error(`Missing request body!`);

    const response = await fetch(buildURL(options), {
      method,
      headers,
      body: JSON.stringify(options.body),
    });

    if (!response.ok)
      throw new Error(
        `Vote update failed! Response status: ${response.status}`,
      );
    const result = response.json();
    return result;
  } catch (err) {
    if (err) return { error: err };
  }
};
