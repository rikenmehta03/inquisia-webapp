import { useCallback, useState } from "react";
import { User } from "../types";
import { useUserApi } from "../../../api";

export const useUserProvider = () => {
  const { getCurrentUser } = useUserApi();

  const [currentUser, setCurrentUser] = useState<User | undefined>(undefined);
  const [isFetchingUser, setIsFetchingUser] = useState(false);

  const fetchCurrentUser  = useCallback(() => {
    setIsFetchingUser(true);
    try {
      getCurrentUser().then(user => {
        setCurrentUser(user);
      });
    } catch (error) {
      console.error(error);
    } finally {
      setIsFetchingUser(false);
    }
  }, []);

  return {
    currentUser,
    isFetchingUser,
    fetchCurrentUser
  };
};
