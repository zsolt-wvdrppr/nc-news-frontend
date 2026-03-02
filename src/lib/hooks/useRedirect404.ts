import { useEffect } from "react";
import { useNavigate } from "react-router";
import type { AppError } from "../errors";

export const useRedirect404 = (error: AppError | null) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (error?.status === 404) {
      navigate("/404");
    }
  }, [error]);
};
