import React from "react";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function input(props) {
  return (
    <div>
      {props.inpType === "checkbox" && (
        <FormControlLabel control={<Checkbox />} label={props.label} />
      )}
      {props.inpType === "text" && (
        <TextField
          type={props.type}
          id="outlined-error"
          label={props.label}
          defaultValue={props.value}
          helperText="Please select your currency"
          error
        />
      )}
      {props.inpType === "multiLine" && (
        <TextField
          id="outlined-error"
          label={props.label}
          defaultValue={props.value}
          multiline
          maxRows={4}
          variant="filled"
          helperText="Please select your currency"
          error
        />
      )}
    </div>
  );
}
