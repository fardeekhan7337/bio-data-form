import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { useFormik } from "formik";
import { useParams } from "react";
import * as Yup from "yup";
import Input from "./Input";
import Head from "./Head";
import Btn from "./Btn";

export default function EditUser() {
  const { id } = useParams();
  console.log(id);

  const initialValues = {
    name: "",
    email: "",
    password: "",
    address: "",
    is_married: false,
    hobbies: [],
  };

  const validation = Yup.object({
    address: Yup.string()
      .max(200, "Must be 200 characters or less")
      .required("Address is required"),
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const submitData = (values) => {
    const old_users = JSON.parse(localStorage.getItem("users"));
    const new_users = old_users ? [...old_users, values] : [values];

    console.log(new_users);
    localStorage.setItem("users", JSON.stringify(new_users));
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validation,
    onSubmit: async (values, actions) => {
      submitData(values);
      actions.resetForm({ values: "" });
      actions.setStatus({
        sent: true,
        msg: "Record Inserted Successfully!",
      });

      setTimeout(
        () =>
          actions.setStatus({
            sent: false,
          }),
        3000
      );
    },
  });

  return (
    <div>
      <Head btnType="link" head="Edit User" btnTxt="Users List" btnLink="/" />
      <Box
        sx={{
          "& .MuiTextField-root": { m: 1, width: "100%", height: "auto" },
        }}
      >
        <form className="form-contact" onSubmit={formik.handleSubmit}>
          {formik.status && formik.status.msg && (
            <p
              className={`alert ${
                formik.status.sent ? "alert-success" : "alert-error"
              }`}
            >
              {formik.status.msg}
            </p>
          )}
          <Input
            inpType="text"
            label="Name"
            type="text"
            name="name"
            onChange={formik.handleChange}
            error={formik.errors.name}
          />
          <Input
            inpType="text"
            label="Email"
            type="text"
            name="email"
            onChange={formik.handleChange}
            error={formik.errors.email}
          />
          <Input
            inpType="text"
            label="Password"
            type="password"
            name="password"
            onChange={formik.handleChange}
            error={formik.errors.password}
          />
          <Input
            inpType="checkbox"
            label="Is Married?"
            onChange={formik.handleChange}
            name="is_married"
          />
          <h3>Hobbies</h3>
          <Grid container>
            <Grid item xs={2}>
              <Input
                inpType="checkbox"
                onChange={formik.handleChange}
                label="Reading"
                name="hobbies"
              />
            </Grid>
            <Grid item xs={2}>
              <Input
                inpType="checkbox"
                onChange={formik.handleChange}
                label="Writing"
                name="hobbies"
              />
            </Grid>
            <Grid item xs={2}>
              <Input
                inpType="checkbox"
                onChange={formik.handleChange}
                label="Sports"
                name="hobbies"
              />
            </Grid>
            <Grid item xs={2}>
              <Input
                inpType="checkbox"
                onChange={formik.handleChange}
                label="Outing"
                name="hobbies"
              />
            </Grid>
            <Grid item xs={2}>
              <Input
                inpType="checkbox"
                onChange={formik.handleChange}
                label="Sports"
                name="hobbies"
              />
            </Grid>
          </Grid>
          <Input
            inpType="multiLine"
            label="Address"
            name="address"
            onChange={formik.handleChange}
            error={formik.errors.address}
          />
          <Btn btnType="submit" text="submit" />
        </form>
      </Box>
    </div>
  );
}
