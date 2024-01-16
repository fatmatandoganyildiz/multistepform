import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

function Confirm(props) {
  const { state, nextStep, prevStep } = props;

  const handleContinue = (e) => {
    e.preventDefault();
    console.log(state.firstName);
    nextStep();
  };

  const handleBack = (e) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <>
      <div>
        <Box sx={{ flexGrow: 1, textAlign: "center" }}>
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Confirm User Data
              </Typography>
            </Toolbar>
          </AppBar>
          <div style={styles.list}>
            <List>
              <ListItem>
                <ListItemText
                  primary="First Name"
                  secondary={state.firstName}
                />
              </ListItem>
              <ListItem>
                <ListItemText primary="Last Name" secondary={state.lastName} />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Occupation"
                  secondary={state.occupation}
                />
              </ListItem>
              <ListItem>
                <ListItemText primary="City" secondary={state.city} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Bio" secondary={state.bio} />
              </ListItem>
            </List>
          </div>
          <Button
            label="Go Back"
            style={styles.button}
            onClick={handleBack}
            variant="outlined"
          >
            Go Back
          </Button>
          <Button
            label="Continue"
            style={styles.button}
            onClick={handleContinue}
            variant="contained"
          >
            Confirm & Continue
          </Button>
        </Box>
      </div>
    </>
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
export default Confirm;
