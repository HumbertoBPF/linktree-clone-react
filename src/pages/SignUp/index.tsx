import { Box, Grid } from "@mui/material";
import signupBackground from "../../assets/signup_background.jpg";
import SignUpForm from "../../components/SignUpForm";

function SignUp() {
  return (
    <Grid container>
      <Grid size={{ xs: 12, md: 6 }}>
        <SignUpForm />
      </Grid>
      <Grid size={{ xs: 0, md: 6 }}>
        <Box
          component="img"
          sx={{
            width: "100%",
            height: "100%",
          }}
          src={signupBackground}
          alt="Sign-up background image"
        />
      </Grid>
    </Grid>
  );
}

export default SignUp;
