import type { QueryParams, Options } from "./types";

export const formatDate = (dateStr: string) => {
  if (!dateStr) return;

  const dayLookup = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const monthLookup = [
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  const date = new Date(dateStr);
  const output = `
  ${dayLookup[date.getDay()]},
  ${date.getDate()}.
  ${monthLookup[date.getMonth()]}. 
  ${date.getFullYear()}.`;

  return output.toString();
};

export const formatQueryParams = (queryParams: QueryParams) => {
  if (!queryParams) return "";
  let queryParamsStr = "";
  for (const [key, value] of Object.entries(queryParams)) {
    queryParamsStr += "?" + key + "=" + value;
  }
  return queryParamsStr;
};

export const buildURL = (options: Options) => {
  const urlFragments = {
    ":baseUrl": options.baseUrl || "",
    ":base_url": options.baseUrl || "",
    ":article_id": options.articleId?.toString() || "",
    ":articleId": options.articleId?.toString() || "",
    ":comment_id": options.commentId?.toString() || "",
    ":commentId": options.commentId?.toString() || "",
    ":username": options.username?.toString() || "",
  };

  const regex = /:(\w+)/gm; // match :placeholders
  if (!options.url) throw new Error(`Missing URL from optons!`);
  const placeholders = options.url.match(regex);

  if (!placeholders || placeholders?.length === 0) return options.url; // no placeholder found in url string
  if (!options.baseUrl) throw new Error(`Missing request baseUrl!`);

  let completeUrl = options.url;
  placeholders.forEach((placeholder) => {
    const urlFragment = urlFragments[placeholder as keyof typeof urlFragments];
    if (!urlFragment)
      throw new Error(`Process failed, because ${placeholder} is missing!`);
    completeUrl = completeUrl.replace(placeholder, urlFragment);
  });

  if (options.queryParams) {
    completeUrl += formatQueryParams(options.queryParams);
  }

  return completeUrl;
};
