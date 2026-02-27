import type { Options } from "./types";
import { buildURL } from "./utils";

const BASE_URL = "https://zsolts-news.onrender.com/api";

export const fetchContent = async (options: Options) => {
  options.baseUrl = BASE_URL;

  try {
    const response = await fetch(buildURL(options));
    if (!response.ok)
      throw new Error(`Fetching failed! Response status: ${response.status}`);
    return response.json();
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
