import { useContext } from "react";

import { UserContextType } from "../types";
import { UserContext } from "../UserContextProvider";

export const useUserContext = (): UserContextType => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error("useUserContext must be used inside UserContextProvider");
  }

  return context;
};
