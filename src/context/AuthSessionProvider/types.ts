import { useAuthSessionProvider } from "./hooks/useAuthSessionProvider";

export type AuthSession = {
    access_token: string;
    refresh_token: string;
};

export type AuthSessionContextType = ReturnType<typeof useAuthSessionProvider>;