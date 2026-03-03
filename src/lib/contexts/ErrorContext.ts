import { createContext } from "react";
import { AppError } from "../errors";

export interface ErrorContextType {
  globalError: AppError | null;
  setGlobalError: (globalError: AppError | null) => void;
}

const ErrorContext = createContext<ErrorContextType>({
  globalError: new AppError(""),
  setGlobalError: () => {},
});

export default ErrorContext;
