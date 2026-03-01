import { useState, useContext } from "react";
import ErrorContext from "../contexts/ErrorContext";
import { deleteContent as fetchDelete } from "../api";

export const useDeleteContent = () => {
  const { setGlobalError } = useContext(ErrorContext);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error>();
  const [isDone, setIsDone] = useState<boolean>(false);

  const deleteContent = async (commentId: number) => {
    try {
      setLoading(true);
      setIsDone(false);
      await fetchDelete({
        url: ":baseUrl/comments/:comment_id",
        commentId,
      });

      setIsDone(true);
    } catch (err) {
      if (err && err instanceof Error) {
        if (setGlobalError) setGlobalError(err);
        setError(err);
      }
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, isDone, deleteContent };
};
