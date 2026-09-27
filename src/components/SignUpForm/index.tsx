import {
  Box,
  Button,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState, type ChangeEvent } from "react";
import { isValidEmail, isValidPassword } from "../../utils/validations";
import { signup } from "../../api/linktree";
import FeedbackAlert from "../FeedbackAlert";

interface FormAlert {
  open: boolean;
  severity: "success" | "error";
  message: string;
}

function SignUpForm() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");

  const [emailError, setEmailError] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [formAlert, setFormAlert] = useState<FormAlert>({
    open: false,
    severity: "success",
    message: "",
  });

  const validateEmail = (email: string): boolean => {
    if (email === "") {
      setEmailError("An email address is required");
      return false;
    }

    if (!isValidEmail(email)) {
      setEmailError("The email address is invalid");
      return false;
    }

    setEmailError("");
    return true;
  };

  const validateFirstName = (firstName: string): boolean => {
    if (firstName === "") {
      setFirstNameError("A first name is required");
      return false;
    }

    setFirstNameError("");
    return true;
  };

  const validateLastName = (lastName: string): boolean => {
    if (lastName === "") {
      setLastNameError("A last name is required");
      return false;
    }

    setLastNameError("");
    return true;
  };

  const validatePassword = (password: string): boolean => {
    if (!isValidPassword(password)) {
      setPasswordError(
        "The password must have between 8 and 64 characters, at least one lowercase letter, one uppercase letter, one digit, and one non-alphanumeric character",
      );
      return false;
    }

    setPasswordError("");
    return true;
  };

  const submitForm = () => {
    const isValidEmail = validateEmail(email);
    const isValidFirstName = validateFirstName(firstName);
    const isValidLastName = validateLastName(lastName);
    const isValidPassword = validatePassword(password);

    if (
      isValidEmail &&
      isValidFirstName &&
      isValidLastName &&
      isValidPassword
    ) {
      signup(
        {
          email,
          firstName,
          lastName,
          password,
        },
        () => {
          setFormAlert({
            open: true,
            severity: "success",
            message: "Account successfully created",
          });
        },
        (error) => {
          const errorMessage = error.response?.data.detail;
          setFormAlert({
            open: true,
            severity: "error",
            message:
              errorMessage ?? "An unexpected issue happened. Try again later.",
          });
        },
      );
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <Typography variant="h4" align="center" sx={{ fontWeight: "bold" }}>
        Join Linktree
      </Typography>
      <Typography align="center" sx={{ color: "#666666" }}>
        Sign up for free!
      </Typography>
      <Grid container spacing={2} sx={{ marginY: 2 }}>
        <Grid
          size={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextField
            label="Email"
            value={email}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setEmail(event.target.value);
            }}
            error={emailError !== ""}
            helperText={emailError}
            sx={{ width: "70%" }}
          />
        </Grid>
        <Grid
          size={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextField
            label="First name"
            value={firstName}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setFirstName(event.target.value);
            }}
            error={firstNameError !== ""}
            helperText={firstNameError}
            sx={{ width: "70%" }}
          />
        </Grid>
        <Grid
          size={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextField
            label="Last name"
            value={lastName}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setLastName(event.target.value);
            }}
            error={lastNameError !== ""}
            helperText={lastNameError}
            sx={{ width: "70%" }}
          />
        </Grid>
        <Grid
          size={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FormControl sx={{ width: "70%" }} variant="outlined">
            <InputLabel htmlFor="paswword-input" error={passwordError !== ""}>
              Password
            </InputLabel>
            <OutlinedInput
              id="password-input"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                setPassword(event.target.value);
              }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      showPassword
                        ? "hide the password"
                        : "display the password"
                    }
                    edge="end"
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
              error={passwordError !== ""}
            />
            <FormHelperText error={passwordError !== ""}>
              {passwordError}
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid
          size={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Button
            variant="contained"
            color="secondary"
            onClick={submitForm}
            sx={{
              backgroundColor: "#000000",
              borderRadius: 20,
              padding: 2,
              width: "70%",
            }}
          >
            Continue
          </Button>
        </Grid>
      </Grid>
      <Box>
        <Typography align="center">
          Already have an account? <Link href="/signin">Log in</Link>
        </Typography>
      </Box>
      <FeedbackAlert
        open={formAlert.open}
        severity={formAlert.severity}
        onClose={() => {
          setFormAlert({ ...formAlert, open: false });
        }}
      >
        {formAlert.message}
      </FeedbackAlert>
    </Box>
  );
}

export default SignUpForm;
