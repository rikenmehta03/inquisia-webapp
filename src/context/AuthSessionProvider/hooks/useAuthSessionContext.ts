import { useContext } from "react";

import { AuthSessionContext } from "../authSessionProvider";
import { AuthSessionContextType } from "../types";

export const useAuthSessionContext = (): AuthSessionContextType => {
  const context = useContext(AuthSessionContext);

  if (context === undefined) {
    throw new Error("useAuthSessionContext must be used inside AuthSessionProvider");
  }

  return context;
};
