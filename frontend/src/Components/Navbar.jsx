import {
  AppBar, Container, Toolbar, Typography
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {

  return (
    <div>
      <AppBar position="static" sx={{ background: "#000" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} /> */}
            <Link to="/">
              <Typography
                variant="h6"
                noWrap
                sx={{
                  mr: 2,
                  display: { xs: "none", md: "flex" },
                  fontWeight: 700,
                  letterSpacing: ".3rem",
                  color: "#fff",
                  textDecoration: "none",
                  alignItems: "center",
                }}
              >
                SHOW TIME
              </Typography>
            </Link>

            {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
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
              SHOW TIME
            </Typography>
            
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
