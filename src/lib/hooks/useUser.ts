import { useState, useContext } from "react";
import ErrorContext from "../contexts/ErrorContext";
import UserContext from "../contexts/UserContext";
import { fetchUser } from "../api";

export const useUser = () => {
  const [error, setError] = useState<Error>();
  const [loading, setLoading] = useState<boolean>(false);
  const { setGlobalError } = useContext(ErrorContext);
  const { user, setUser } = useContext(UserContext);

  const validateUser = async (username: string) => {
    try {
      if (username === user?.username)
        throw Error(`You're already logged in as ${username}!`);
      setLoading(true);
      const userObj = await fetchUser({
        expectedType: "user",
        username,
        url: ":baseUrl/users/:username",
      });
      if (userObj.type === "error") throw new Error(userObj.error);

      if (userObj.type === user && !userObj.user)
        throw new Error("Expected user but got different data structure!");

      setUser(userObj);
    } catch (err) {
      if (err && err instanceof Error) {
        setError(err);
        if (setGlobalError) setGlobalError(err);
      }
    } finally {
      setLoading(false);
    }
  };

  const logOut = () => {
    setUser(null);
  };

  return { validateUser, logOut, loading, error };
};
