import { useEffect, useState } from "react";
import { redirect } from "react-router";
import type { AppError } from "../errors";

export const useRedirect404 = (error: AppError | null) => {
  useEffect(() => {
    console.log("ERROR", error?.status);
    if (error?.status === 404) {
      console.log("recirecting");
      redirect("/404");
    }
  }, [error]);
};
