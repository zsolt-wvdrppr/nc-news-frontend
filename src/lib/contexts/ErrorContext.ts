import { createContext } from "react";

export interface ErrorContextType {
  globalError?: Error;
  setGlobalError?: (globalError: Error) => void;
}

const ErrorContext = createContext<ErrorContextType>({
  globalError: new Error(),
  setGlobalError: () => {},
});

export default ErrorContext;
