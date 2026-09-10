import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  useTheme,
} from "@mui/material";
import CustomAppBar from "../../components/CustomAppBar";
import chain from "../../assets/chain.jpg";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router";
import { useState, type ChangeEvent } from "react";

function Home() {
  const [linkSuffix, setLinkSuffix] = useState("");

  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.main,
        minHeight: "100vh",
        padding: 4,
      }}
    >
      <CustomAppBar />
      <Grid container spacing={2} sx={{ paddingX: 8 }}>
        <Grid
          size={{ sm: 12, md: 6 }}
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: 4,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h2" sx={{ fontWeight: "bold" }}>
            A link in bio built for you.
          </Typography>
          <Typography>
            Join people using Linktree for their link in bio. One link to help
            you share everything you create, curate and sell from your
            Instagram, TikTok, Twitter, YouTube and other social media profiles.
          </Typography>
          <Grid
            sx={{
              width: "100%",
              display: "flex",
              padding: 2,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid size={6}>
              <TextField
                sx={{ backgroundColor: "#FFFFFF", width: "100%" }}
                value={`linktr.ee/${linkSuffix}`}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  const { value } = event.target;

                  // We want the suffix after the linktr.ee/ domain part of the URL
                  if (value.startsWith(`linktr.ee/`)) {
                    setLinkSuffix(value.slice(10));
                    return;
                  }

                  // If the linkSuffix does not have the linktr.ee prefix, fallback to the initial value
                  setLinkSuffix("");
                }}
              />
            </Grid>
            <Grid size={6}>
              <Button
                variant="contained"
                color="secondary"
                size="large"
                sx={{
                  borderRadius: 20,
                  marginLeft: 2,
                  width: "100%",
                }}
                onClick={() => navigate("/signup")}
              >
                Get started for free
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid size={{ sm: 12, md: 6 }} sx={{ padding: 4 }}>
          <Box
            component="img"
            sx={{
              width: "100%",
              borderRadius: 2,
            }}
            src={chain}
            alt="Chain"
          />
        </Grid>
      </Grid>
      <Footer />
    </Box>
  );
}

export default Home;
