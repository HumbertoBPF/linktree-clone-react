import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router";

function CustomAppBar() {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: "#FFFFFF", borderRadius: 20 }}
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Linktree
          </Typography>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#D9D9D9" }}
            onClick={() => navigate("/signin")}
          >
            Log in
          </Button>
          <Button
            variant="contained"
            color="secondary"
            sx={{ backgroundColor: "#000000", borderRadius: 20, marginLeft: 2 }}
            onClick={() => navigate("/signup")}
          >
            Sign up for free
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default CustomAppBar;
