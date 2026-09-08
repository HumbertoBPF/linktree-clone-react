import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function CustomAppBar() {
  return (
    <Box sx={{ flexGrow: 1, padding: 4 }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#FFFFFF", borderRadius: 20 }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Linktree
          </Typography>
          <Button variant="contained" sx={{ backgroundColor: "#D9D9D9" }}>
            Log in
          </Button>
          <Button
            variant="contained"
            color="secondary"
            sx={{ backgroundColor: "#000000", borderRadius: 20, marginLeft: 2 }}
          >
            Sign up for free
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default CustomAppBar;
