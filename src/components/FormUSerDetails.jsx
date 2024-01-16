import React from "react";
import { TextField } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function FormUserDetails(props) {
  const { values, handleChange, nextStep } = props;

  const handleContinue = (e) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1, textAlign: "center" }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Enter User Details
            </Typography>
          </Toolbar>
        </AppBar>
        <TextField
          label="Enter Your First Name"
          onChange={handleChange("firstName")}
          defaultValue={values.firstName}
          style={styles.textbox}
        />
        <br />
        <TextField
          label="Enter Your Last Name"
          onChange={handleChange("lastName")}
          defaultValue={values.lastName}
          style={styles.textbox}
        />
        <br />
        <Button
          label="Continue"
          onClick={handleContinue}
          style={styles.button}
          variant="contained"
        >
          Continue
        </Button>
      </Box>
    </div>
  );
}
const styles = {
  button: {
    margin: 15,
  },
  textbox: {
    margin: 15,
  },
};
export default FormUserDetails;
