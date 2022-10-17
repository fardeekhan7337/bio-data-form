import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Input from "./Input";
import Head from "./Head";
import Btn from "./Btn";

export default function Users() {
  return (
    <div>
      <Head
        btnType="link"
        head="Create New User"
        btnTxt="Users List"
        btnLink="/"
      />
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "100%", height: "auto" },
        }}
        noValidate
        autoComplete="off"
      >
        <Input inpType="text" label="Name" type="text" />
        <Input inpType="text" label="Email" type="email" />
        <Input inpType="text" label="Password" type="password" />
        <Input inpType="checkbox" label="Is Married?" />
        <h3>Hobbies</h3>
        <Grid container>
          <Grid item xs={2}>
            <Input inpType="checkbox" label="Reading" />
          </Grid>
          <Grid item xs={2}>
            <Input inpType="checkbox" label="Writing" />
          </Grid>
          <Grid item xs={2}>
            <Input inpType="checkbox" label="Sports" />
          </Grid>
          <Grid item xs={2}>
            <Input inpType="checkbox" label="Outing" />
          </Grid>
          <Grid item xs={2}>
            <Input inpType="checkbox" label="Sports" />
          </Grid>
        </Grid>
        <Input inpType="multiLine" label="Address" />
        <Btn btnType="btn" text="submit" />
      </Box>
    </div>
  );
}
