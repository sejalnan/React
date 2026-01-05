import { Box, Container, Typography, IconButton, Stack } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "primary.main",
        color: "white",
        py: 2,
        px: 2,
        width: "100%",
        position: "fixed", // makes it always visible
        bottom: 0, // sticks to bottom
        left: 0,
      }}
    >
      <Container maxWidth="xl">
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={2}
          justifyContent="space-between"
          alignItems="center"
        >
          {/* Left */}
          <Typography variant="body2">
            © {new Date().getFullYear()} - sejalnandanwar302@gmail.com
          </Typography>

          {/* Center */}
          <Typography variant="body2" align="center">
            CONTACT US
          </Typography>

          {/* Right */}
          <Stack direction="row" spacing={1}>
            <IconButton color="inherit">
              <FacebookIcon />
            </IconButton>
            <IconButton color="inherit">
              <TwitterIcon />
            </IconButton>
            <IconButton color="inherit">
              <LinkedInIcon />
            </IconButton>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
