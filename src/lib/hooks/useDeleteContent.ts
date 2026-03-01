import { useState, useContext } from "react";
import ErrorContext from "../contexts/ErrorContext";
import { deleteContent as fetchDelete } from "../api";
import { AppError } from "../errors";

export const useDeleteContent = () => {
  const { setGlobalError } = useContext(ErrorContext);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<AppError>();
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
      const appError =
        err instanceof AppError ? err : new AppError(String(err));
      setError(appError);
      setGlobalError(appError);

      throw new AppError(String(err));
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, isDone, deleteContent };
};
