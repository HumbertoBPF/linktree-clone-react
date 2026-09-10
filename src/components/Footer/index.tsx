import { Box, Button, Link, Typography, useTheme } from "@mui/material";

function Footer() {
  const theme = useTheme();

  return (
    <Box sx={{ backgroundColor: "#FFFFFF", borderRadius: 4, padding: 3 }}>
      <Typography sx={{ color: "#666666" }}>
        This app was developed by Humberto Borges for learning purposes. This is
        not intended to be a real commercial app or to reproduce the real
        capabilities of any existing app. All the source code is authoral.
      </Typography>
      <Link sx={{ color: "#666666", marginTop: 1 }}>
        Medium: Humberto Filho
      </Link>
      <Box sx={{ marginTop: 2 }}>
        <Button variant="contained" sx={{ backgroundColor: "#D9D9D9" }}>
          Log in
        </Button>
        <Button
          variant="contained"
          sx={{
            backgroundColor: theme.palette.primary.main,
            borderRadius: 20,
            marginLeft: 2,
          }}
        >
          Get started for free
        </Button>
      </Box>
    </Box>
  );
}

export default Footer;
