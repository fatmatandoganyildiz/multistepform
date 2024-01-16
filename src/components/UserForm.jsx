import React, { useEffect, useState } from "react";
import FormUSerDetails from "./FormUSerDetails";
import FormPersonalDetails from "../components/FormPersonalDetails";
import Success from "../components/Success";
import Confirm from "../components/Confirm";

function UserForm() {
  const [state, setState] = useState({
    step: 1,
    firstName: "",
    lastName: "",
    occupation: "",
    city: "",
    bio: "",
  });
  
  useEffect(() => {}, []);

  const values = {
    firstName: state.firstName,
    lastName: state.lastName,
    occupation: state.occupation,
    city: state.city,
    bio: state.bio,
  };

  const nextStep = () => {
    setState((prevState) => {
      return {
        ...prevState,
        step: prevState.step + 1,
      };
    });
  };

  const prevStep = () => {
    setState((prevState) => {
      console.log(prevState.step);
      return {
        ...prevState,
        step: prevState.step - 1,
      };
    });
  };

  const handleChange = (fieldName) => (e) => {
    setState({
      ...state,
      [fieldName]: e.target.value,
    });
  };

  switch (state.step) {
    case 1:
      return (
        <FormUSerDetails
          nextStep={nextStep}
          handleChange={handleChange}
          values={values}
        />
      );
    case 2:
      return (
        <FormPersonalDetails
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          values={values}
        />
      );
    case 3:
      return <Confirm nextStep={nextStep} prevStep={prevStep} state={state} />;
    case 4:
      return <Success />;
    default:
      console.log("This is a multi-step form built with React.");
  }
  return;
}

export default UserForm;
