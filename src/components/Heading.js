import Typography from "@mui/material/Typography";

export default function Heading(props) {
  return (
    <div>
      <Typography variant="h4" display="block" gutterBottom>
        {props.head}
      </Typography>
    </div>
  );
}
