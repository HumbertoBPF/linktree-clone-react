import { Box, Button, Link, Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router";

function Footer() {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Box sx={{ backgroundColor: "#FFFFFF", borderRadius: 4, padding: 3 }}>
      <Typography sx={{ color: "#666666" }}>
        This app was developed by Humberto Borges for learning purposes. This is
        not intended to be a real commercial app or to reproduce the real
        capabilities of any existing app. All the source code is authoral.
      </Typography>
      <Link
        sx={{ color: "#666666", marginTop: 1 }}
        href="https://medium.com/@humbertofilho_30158"
      >
        Medium: Humberto Filho
      </Link>
      <Box sx={{ marginTop: 2 }}>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#D9D9D9" }}
          onClick={() => navigate("/signin")}
        >
          Log in
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: theme.palette.primary.main,
            borderRadius: 20,
            marginLeft: 2,
          }}
          onClick={() => navigate("/signup")}
        >
          Get started for free
        </Button>
      </Box>
    </Box>
  );
}

export default Footer;
