import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  redirect,
} from "react-router-dom";

import { Register, Login } from "./auth";
import { LoginLayout, Home } from "./layout";

import { UserContextProvider } from "./context/UserContextProvider/UserContextProvider";
import { AuthSessionProvider } from "./context/AuthSessionProvider/authSessionProvider";

import { useAuthSession } from "./hooks";
import { ChatContextProvider } from "./context/ChatContextProvider";

const App = () => {
  return (
    <AuthSessionProvider>
      <UserContextProvider>
        <ChatContextProvider>
          <Home />
        </ChatContextProvider>
      </UserContextProvider>
    </AuthSessionProvider>
  );
};

const LoginWithLayout = () => {
  return (
    <LoginLayout>
      <Login />
    </LoginLayout>
  );
};

const RegisterWithLayout = () => {
  return (
    <LoginLayout>
      <Register />
    </LoginLayout>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    Component: Outlet,
    children: [
      {
        path: "login",
        loader: () => {
          const { authSession } = useAuthSession();
          if (authSession !== undefined) {
            return redirect("/");
          }
          return null;
        },
        Component: LoginWithLayout,
      },
      {
        index: true,
        loader: () => {
          const { authSession } = useAuthSession();
          if (authSession === undefined) {
            return redirect("/login");
          }
          return null;
        },
        Component: App,
      },
      {
        path: "/register",
        Component: RegisterWithLayout,
      },
    ],
  },
]);

export default () => {
  return <RouterProvider router={router} />;
};
