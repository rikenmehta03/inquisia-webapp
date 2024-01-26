import * as React from "react";
import { useNavigate } from "react-router-dom";

import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import Typography from "@mui/joy/Typography";
import FormLabel from "@mui/joy/FormLabel";
import Link from "@mui/joy/Link";
import Input from "@mui/joy/Input";
import Stack from "@mui/joy/Stack";

import { useAuthApi } from "../../api";
import { useAuthSession } from "../../hooks";

interface FormElements extends HTMLFormControlsCollection {
  email: HTMLInputElement;
  password: HTMLInputElement;
}
interface SignInFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

export default () => {
  const { fetchAuthKey } = useAuthApi();
  const { updateAuthSession } = useAuthSession();
  const navigate = useNavigate();

  const onFormSubmit = (event: React.FormEvent<SignInFormElement>) => {
    event.preventDefault();
    const formElements = event.currentTarget.elements;
    const data = {
      email: formElements.email.value,
      password: formElements.password.value,
    };

    fetchAuthKey(data.email, data.password).then(
      ({ access_token, refresh_token }) => {
        updateAuthSession(access_token, refresh_token).then(() => {
          navigate("/", { replace: true });
        });
      }
    );
  };

  return (
    <>
      <Stack gap={4} sx={{ mb: 2 }}>
        <Stack gap={1}>
          <Typography level="h3">Sign in</Typography>
          <Typography level="body-sm">
            New to company?{" "}
            <Link href="/register" level="title-sm">
              Sign up!
            </Link>
          </Typography>
        </Stack>
      </Stack>
      <Stack gap={4} sx={{ mt: 2 }}>
        <form onSubmit={onFormSubmit}>
          <FormControl required>
            <FormLabel>Email</FormLabel>
            <Input type="email" name="email" />
          </FormControl>
          <FormControl required>
            <FormLabel>Password</FormLabel>
            <Input type="password" name="password" />
          </FormControl>
          <Stack gap={4} sx={{ mt: 2 }}>
            <Button type="submit" fullWidth>
              Sign in
            </Button>
          </Stack>
        </form>
      </Stack>
    </>
  );
};
