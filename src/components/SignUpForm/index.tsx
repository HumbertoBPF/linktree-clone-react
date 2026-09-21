import {
  Box,
  Button,
  FormControl,
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

function SignUpForm() {
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
          <TextField label="Email" sx={{ width: "70%" }} />
        </Grid>
        <Grid
          size={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextField label="First name" sx={{ width: "70%" }} />
        </Grid>
        <Grid
          size={12}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TextField label="Last name" sx={{ width: "70%" }} />
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
            <InputLabel htmlFor="paswword-input">Password</InputLabel>
            <OutlinedInput
              id="password-input"
              type={"password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton edge="end">
                    <Visibility />
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
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
    </Box>
  );
}

export default SignUpForm;
