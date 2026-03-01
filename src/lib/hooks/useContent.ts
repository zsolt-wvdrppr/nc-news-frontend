import { useEffect, useState, useContext } from "react";
import ErrorContext from "../contexts/ErrorContext";
import type { Options, ContentResponse } from "../types";

export const useContent = (
  fetchFunction: (options: Options) => Promise<ContentResponse>,
  options: Options,
  mode?: string,
) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error>();
  const [content, setContent] = useState<ContentResponse>();
  const [trigger, setTrigger] = useState<boolean>(false);
  const { setGlobalError } = useContext(ErrorContext);

  useEffect(() => {
    if (mode === "trigger" && !trigger) return;
    const fetchContent = async () => {
      try {
        setLoading(true);
        const response = await fetchFunction(options);
        if (response.type === "error")
          throw new Error(`${response.error.message}`);
        validateResponseType(response);
        setContent(response);
      } catch (err) {
        if (err && err instanceof Error) {
          setError(err);
          if (setGlobalError) setGlobalError(err);
        }
      } finally {
        if (mode === "trigger") setTrigger(false);
        setLoading(false);
      }
    };
    fetchContent();
  }, [fetchFunction, trigger]);

  const validateResponseType = (response: ContentResponse) => {
    // Validate the response matches expectedType
    if (response.type === "article" && !response.article) {
      throw new Error(
        "Expected single article but got different data structure",
      );
    }
    if (response.type === "article-list" && !response.articles) {
      throw new Error("Expected article list but got different data structure");
    }
    if (response.type === "comment-list" && !response.comments) {
      throw new Error("Expected comment list but got different data structure");
    }
  };

  return { content, error, loading, setTrigger };
};
