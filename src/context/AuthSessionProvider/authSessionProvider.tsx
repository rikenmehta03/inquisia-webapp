import { createContext, PropsWithChildren } from "react";

import { useAuthSessionProvider } from "./hooks/useAuthSessionProvider";
import { AuthSessionContextType } from "./types";

export const AuthSessionContext = createContext<AuthSessionContextType | undefined>(
  undefined
);

export const AuthSessionProvider = ({ children }: PropsWithChildren<{}>) => {
  const authSessionProviderUtils = useAuthSessionProvider();
  
  return (
    <AuthSessionContext.Provider value={authSessionProviderUtils}>
      {children}
    </AuthSessionContext.Provider>
  );
};
