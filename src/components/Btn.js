import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function Btn(props) {
  return (
    <div>
      {props.btnType === "link" && (
        <Button
          component={Link}
          to={props.link}
          variant="contained"
          color="primary"
        >
          {props.text}
        </Button>
      )}
      {props.btnType === "btn" && (
        <Button
          variant="contained"
          color={props.color ? props.color : "success"}
        >
          {props.text}
        </Button>
      )}
      {props.btnType === "submit" && (
        <Button variant="contained" color="success" type="submit">
          {props.text}
        </Button>
      )}
    </div>
  );
}
