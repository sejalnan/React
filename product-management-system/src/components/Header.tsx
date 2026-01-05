import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import AdbIcon from "@mui/icons-material/Adb";
import { Link } from "react-router-dom";

function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <>
      {/* AppBar fixed at top */}
      <AppBar position="fixed">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* LOGO (Desktop) */}
            <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
            <Typography
              variant="h6"
              component={Link}
              to="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>

            {/* MOBILE MENU */}
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>

              <Menu
                anchorEl={anchorElNav}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                transformOrigin={{ vertical: "top", horizontal: "left" }}
                sx={{ display: { xs: "block", md: "none" } }}
              >
                <MenuItem component={Link} to="/" onClick={handleCloseNavMenu}>
                  Home
                </MenuItem>
                <MenuItem
                  component={Link}
                  to="/products"
                  onClick={handleCloseNavMenu}
                >
                  Products
                </MenuItem>
                <MenuItem
                  component={Link}
                  to="/add-product"
                  onClick={handleCloseNavMenu}
                >
                  Add Product
                </MenuItem>
              </Menu>
            </Box>

            {/* LOGO (Mobile) */}
            <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
            <Typography
              variant="h5"
              component={Link}
              to="/"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>

            {/* DESKTOP MENU */}
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <Button component={Link} to="/" sx={{ my: 2, color: "white" }}>
                Home
              </Button>
              <Button
                component={Link}
                to="/products"
                sx={{ my: 2, color: "white" }}
              >
                Products
              </Button>
              <Button
                component={Link}
                to="/add-product"
                sx={{ my: 2, color: "white" }}
              >
                Add Product
              </Button>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Spacer so content doesn't go under fixed header */}
      <Toolbar />
    </>
  );
}

export default Header;
