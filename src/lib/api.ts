import type { Options } from "./types";
import { buildURL } from "./utils";

const BASE_URL = "https://zsolts-news.onrender.com/api";

export const fetchContent = async (options: Options) => {
  options.baseUrl = BASE_URL;
  const headers = { "Content-Type": "application/json" };

  try {
    if (options.expectedType === undefined)
      throw new Error(`Missing expected type!`);
    if (options.method && options.method !== "GET") {
      if (!options.url) throw new Error(`Missing url!`);
      if (!options.body) throw new Error(`Missing request body!`);
    }
    const response =
      !options.method ?
        await fetch(buildURL(options))
      : await fetch(buildURL(options), {
          method: options.method,
          headers,
          body: JSON.stringify(options.body),
        });
    if (!response.ok)
      throw new Error(`Fetching failed! Response status: ${response.status}`);
    const result = await response.json();

    return { type: options.expectedType, ...result };
  } catch (err) {
    if (err) return { type: "error", error: err };
  }
};

export const fetchUser = async (options: Options) => {
  options.baseUrl = BASE_URL;
  const headers = { "Content-Type": "application/json" };

  try {
    if (options.expectedType !== "user")
      throw new Error("Incorrect expected type!");

    if (!options.url) throw new Error(`Missing url!`);
    const response =
      !options.method ?
        await fetch(buildURL(options))
      : await fetch(buildURL(options), {
          method: options.method,
          headers,
          body: JSON.stringify(options.body),
        });

    if (!response.ok) {
      if (response.status === 404) throw new Error("User not found!");
      throw new Error(
        `Fetching user failed! Response status: ${response.status}`,
      );
    }
    const result = await response.json();

    return { type: "user", ...result.user };
  } catch (err) {
    if (err) return { type: "error", error: err };
  }
};
