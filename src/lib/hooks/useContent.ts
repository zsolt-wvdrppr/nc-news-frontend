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

  return { content, error, loading, setTrigger };
};
