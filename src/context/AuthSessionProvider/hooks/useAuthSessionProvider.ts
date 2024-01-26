import { useCallback, useState } from "react";
import { AuthSession } from "../types";

export const useAuthSessionProvider = () => {
  const fetchAuthSession = () => {
    const sessionString = localStorage.getItem("session");
    if (sessionString) {
      return JSON.parse(sessionString) as AuthSession;
    } else return undefined;
  };
  
  const [authSession, setAuthSession] = useState<undefined | AuthSession>(fetchAuthSession());

  const updateAuthSession = useCallback(
    (access_token: string, refresh_token: string) => {
      const session: AuthSession = {
        access_token,
        refresh_token,
      };
      localStorage.setItem("session", JSON.stringify(session));
      setAuthSession(session);
    },
    []
  );

  const clearAuthSession = useCallback(() => {
    localStorage.removeItem("session");
    setAuthSession(undefined);
  }, []);

  return {
    authSession,
    updateAuthSession,
    clearAuthSession
  };
};
