import React from "react";
import TextField from "@mui/material/TextField";

const TextFieldCustom = (props) => {
  const { className = "" } = props;
  return <TextField className={className} {...props} />;
};

export default TextFieldCustom;
