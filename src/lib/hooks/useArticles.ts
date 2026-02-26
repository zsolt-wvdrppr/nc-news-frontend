import { useEffect, useState, useContext } from "react";
import ErrorContext from "../contexts/ErrorContext";
import type { Options, Content } from "../types";

export const useGetContent = (
  fetchFunction: (queryParams: Object) => Promise<Content>,
  options: Options,
) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error>();
  const [content, setContent] = useState<Content>();
  const { setGlobalError } = useContext(ErrorContext);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        setLoading(true);
        const response = await fetchFunction(options);
        if (response.error) throw new Error(`${response.error.message}`);
        setContent(response);
      } catch (err) {
        if (err && err instanceof Error) {
          setError(err);
          console.log("errmsg", err.message);
          if (setGlobalError) setGlobalError(err);
        }
      } finally {
        setLoading(false);
      }
    };
    fetchContent();
  }, [fetchFunction]);

  return { content, error, loading };
};
