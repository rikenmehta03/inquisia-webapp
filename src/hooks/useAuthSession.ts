type AuthSession = {
  access_token: string;
  refresh_token: string;
};

export const useAuthSession = () => {
  const fetchAuthSession = () => {
    const sessionString = localStorage.getItem("session");
    if (sessionString) {
      return JSON.parse(sessionString) as AuthSession;
    } else return undefined;
  };

  const updateAuthSession = async (access_token: string, refresh_token: string) => {
    const session: AuthSession = {
      access_token,
      refresh_token,
    };
    await localStorage.setItem("session", JSON.stringify(session));
  };

  const clearAuthSession = () => {
    localStorage.clearItem("session");
  }

  return {
    authSession: fetchAuthSession(),
    updateAuthSession,
    clearAuthSession
  };
};
