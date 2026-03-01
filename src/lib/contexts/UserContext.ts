import { createContext } from "react";
import type { UserType } from "../types";

interface UserContextType {
  user: UserType | null;
  setUser: (user: UserType | null) => void;
}

export const UserContext = createContext<UserContextType>({
  user: null,
  setUser: () => {},
});

export default UserContext;
