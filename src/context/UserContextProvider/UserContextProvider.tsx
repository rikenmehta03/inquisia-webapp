import { createContext, PropsWithChildren } from "react";

import { useUserProvider } from "./hooks/useUserProvider";
import { UserContextType } from "./types";

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export const UserContextProvider = ({ children }: PropsWithChildren<{}>) => {
  const userProviderUtils = useUserProvider();
  
  return (
    <UserContext.Provider value={userProviderUtils}>
      {children}
    </UserContext.Provider>
  );
};
