import { useUserProvider } from "./hooks/useUserProvider";

export type User = {
    email: string;
    name: string;
};

export type UserContextType = ReturnType<typeof useUserProvider>;