import { useEffect, useState } from "react";
import type { Options, Content } from "../types";

export const useGetContent = (
  fetchFunction: (queryParams: Object) => Promise<Content>,
  options: Options,
) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error>();
  const [content, setContent] = useState<Content>();

  useEffect(() => {
    const fetchContent = async () => {
      try {
        setLoading(true);
        const response = await fetchFunction(options);
        if (response.error) throw new Error(`${response.error.message}`);
        setContent(response);
      } catch (err) {
        if (err && err instanceof Error) setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchContent();
  }, [fetchFunction]);

  return { content, error, loading };
};
