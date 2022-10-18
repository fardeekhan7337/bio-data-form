import React from "react";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function input(props) {
  return (
    <div>
      {props.inpType === "checkbox" && (
        <FormControlLabel
          control={
            <Checkbox
              name={props.name}
              onChange={props.onChange}
              value={props.label}
            />
          }
          label={props.label}
        />
      )}
      {props.inpType === "text" && (
        <TextField
          type={props.type}
          name={props.name}
          label={props.label}
          defaultValue={props.value}
          error={props.error ? true : false}
          helperText={props.error}
          onChange={props.onChange}
        />
      )}
      {props.inpType === "multiLine" && (
        <TextField
          name={props.name}
          label={props.label}
          defaultValue={props.value}
          multiline
          maxRows={4}
          onChange={props.onChange}
          variant="filled"
          error={props.error ? true : false}
          helperText={props.error}
        />
      )}
    </div>
  );
}
