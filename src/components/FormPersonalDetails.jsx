import React from "react";
import { TextField } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

function FormPersonalDetails(props) {
  const { values, handleChange, nextStep, prevStep } = props;

  const handleContinue = (e) => {
    e.preventDefault();
    nextStep();
  };

  const handleBack = (e) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1, textAlign: "center" }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Enter Personal Details
            </Typography>
          </Toolbar>
        </AppBar>
        <TextField
          label="Enter Your Occupation"
          onChange={handleChange("occupation")}
          defaultValue={values.occupation}
          style={styles.textbox}
        />
        <TextField
          label="Enter Your City"
          onChange={handleChange("city")}
          defaultValue={values.city}
          style={styles.textbox}
        />
        <br />
        <TextField
          label="Enter Your Bio"
          onChange={handleChange("bio")}
          defaultValue={values.bio}
          style={styles.textbox}
        />
        <br />
        <Button
          label="Back"
          style={styles.button}
          onClick={handleBack}
          variant="outlined"
        >
          Back
        </Button>
        <Button
          label="Continue"
          style={styles.button}
          onClick={handleContinue}
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

export default FormPersonalDetails;
