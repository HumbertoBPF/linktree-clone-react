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

function Home() {
  const theme = useTheme();

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
                placeholder="linktr.ee/"
                sx={{ backgroundColor: "#FFFFFF", width: "100%" }}
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
