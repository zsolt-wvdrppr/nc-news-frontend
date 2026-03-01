import { useState, useContext } from "react";
import ErrorContext from "../contexts/ErrorContext";
import UserContext from "../contexts/UserContext";
import { fetchUser } from "../api";
import { AppError } from "../errors";

export const useUser = () => {
  const [error, setError] = useState<AppError>();
  const [loading, setLoading] = useState<boolean>(false);
  const { setGlobalError } = useContext(ErrorContext);
  const { user, setUser } = useContext(UserContext);

  const validateUser = async (username: string) => {
    try {
      if (username === user?.username)
        throw new AppError(`You're already logged in as ${username}!`);
      setLoading(true);
      const userObj = await fetchUser({
        expectedType: "user",
        username,
        url: ":baseUrl/users/:username",
      });
      if (userObj.type === "error") throw new AppError(userObj.error);

      if (userObj.type === user && !userObj.user)
        throw new AppError("Expected user but got different data structure!");

      setUser(userObj);
    } catch (err) {
      const appError =
        err instanceof AppError ? err : new AppError(String(err));
      setError(appError);
      setGlobalError(appError);
    } finally {
      setLoading(false);
    }
  };

  const logOut = () => {
    setUser(null);
  };

  return { validateUser, logOut, loading, error };
};
