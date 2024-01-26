import * as React from "react";
import { useNavigate } from "react-router-dom";

import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import FormControl from "@mui/joy/FormControl";
import Typography from "@mui/joy/Typography";
import FormLabel from "@mui/joy/FormLabel";
import Link from "@mui/joy/Link";
import Input from "@mui/joy/Input";
import Stack from "@mui/joy/Stack";

import { useUserApi, useAuthApi } from "../../api";
import { useAuthSession } from "../../hooks";

interface FormElements extends HTMLFormControlsCollection {
  email: HTMLInputElement;
  password: HTMLInputElement;
  name: HTMLInputElement;
}
interface RegisterFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

export default () => {
  const { createUser } = useUserApi();
  const { fetchAuthKey } = useAuthApi();
  const { updateAuthSession } = useAuthSession();
  const navigate = useNavigate();

  const onFormSubmit = (event: React.FormEvent<RegisterFormElement>) => {
    event.preventDefault();
    const formElements = event.currentTarget.elements;
    const data = {
      email: formElements.email.value,
      password: formElements.password.value,
      name: formElements.name.value,
    };
    createUser(data).then(() => {
      fetchAuthKey(data.email, data.password).then(
        ({ access_token, refresh_token }) => {
          updateAuthSession(access_token, refresh_token);
          navigate("/", { replace: true });
        }
      );
    });
  };
  return (
    <>
      <Stack gap={4} sx={{ mb: 2 }}>
        <Stack gap={1}>
          <Typography level="h3">Sign up</Typography>
        </Stack>
      </Stack>
      <Stack gap={4} sx={{ mt: 2 }}>
        <form onSubmit={onFormSubmit}>
          <FormControl required>
            <FormLabel>Name</FormLabel>
            <Input type="text" name="name" />
          </FormControl>
          <FormControl required>
            <FormLabel>Email</FormLabel>
            <Input type="email" name="email" />
          </FormControl>
          <FormControl required>
            <FormLabel>Password</FormLabel>
            <Input type="password" name="password" />
          </FormControl>
          <Stack gap={4} sx={{ mt: 2 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography level="body-sm">
                Already have an account?{" "}
                <Link href="/login" level="title-sm">
                  Log in!
                </Link>
              </Typography>
            </Box>
            <Button type="submit" fullWidth>
              Create
            </Button>
          </Stack>
        </form>
      </Stack>
    </>
  );
};
