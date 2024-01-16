import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

function Success() {
  return (
    <>
      <div>
        <Box sx={{ flexGrow: 1, textAlign: "center" }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Success{" "}
              </Typography>
            </Toolbar>
          </AppBar>
          <h1> Thank you for your submission</h1>
          <p>You will get an email with further instructions</p>
        </Box>
      </div>
    </>
  );
}

export default Success;
