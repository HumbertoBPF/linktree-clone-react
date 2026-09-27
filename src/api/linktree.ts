import type { AxiosError } from "axios";
import { linktreeClient } from "./http";

interface SignUpUser {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

interface SignUpError {
  detail: string;
}

export const signup = (
  signUpUser: SignUpUser,
  onSuccess: () => void,
  onError: (error: AxiosError<SignUpError>) => void,
) => {
  return linktreeClient()
    .post("/signup", {
      email: signUpUser.email,
      first_name: signUpUser.firstName,
      last_name: signUpUser.lastName,
      password: signUpUser.password,
    })
    .then(() => {
      onSuccess();
    })
    .catch((error) => {
      onError(error);
    });
};
