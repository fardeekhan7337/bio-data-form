import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Btn from "./Btn";
import Heading from "./Heading";

export default function Head(props) {
  return (
    <div>
      <Grid container spacing={2} pt={3}>
        <Grid item xs={8}>
          <Heading head={props.head} />
        </Grid>
        <Grid item xs={4} align="right">
          <Btn
            btnType={props.btnType}
            text={props.btnTxt}
            link={props.btnLink}
          />
        </Grid>
      </Grid>
      <Divider sx={{ mb: "20px" }} />
    </div>
  );
}
