import { AppError } from "./errors";
import type { Options } from "./types";
import { buildURL } from "./utils";

const BASE_URL = "https://zsolts-news.onrender.com/api";

/* GET, POST, PATCH articles and comments*/
export const fetchContent = async (options: Options) => {
  options.baseUrl = BASE_URL;
  const headers = { "Content-Type": "application/json" };

  if (options.expectedType === undefined)
    throw new AppError(`Missing expected type!`);
  if (options.method && options.method !== "GET") {
    if (!options.url) throw new AppError(`Missing url!`);
    if (!options.body) throw new AppError(`Missing request body!`);
  }
  const response =
    !options.method ?
      await fetch(buildURL(options))
    : await fetch(buildURL(options), {
        method: options.method,
        headers,
        body: JSON.stringify(options.body),
      });
  if (!response.ok) {
    throw new AppError("Fetching failed!", response.status);
  }
  const result = await response.json();

  return { type: options.expectedType, ...result };
};

/* GET user data */
export const fetchUser = async (options: Options) => {
  options.baseUrl = BASE_URL;
  const headers = { "Content-Type": "application/json" };

  if (options.expectedType !== "user")
    throw new AppError("Incorrect expected type!");

  if (!options.url) throw new AppError(`Missing url!`);
  const response =
    !options.method ?
      await fetch(buildURL(options))
    : await fetch(buildURL(options), {
        method: options.method,
        headers,
        body: JSON.stringify(options.body),
      });

  if (!response.ok) {
    if (response.status === 404) throw new AppError("User not found!");
    throw new AppError(
      `Fetching user failed! Response status: ${response.status}`,
    );
  }
  const result = await response.json();

  return { type: "user", ...result.user };
};

export const deleteContent = async (options: Options) => {
  options.baseUrl = BASE_URL;
  const headers = { "Content-Type": "application/json" };

  if (!options.url) throw new AppError(`Missing url!`);

  const response = await fetch(buildURL(options), {
    method: "DELETE",
    headers,
  });

  if (!response.ok)
    throw new AppError(`Deletion failed! Response status: ${response.status}`);

  return { type: "status", status: response.status };
};
