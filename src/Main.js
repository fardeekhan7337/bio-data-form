import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Users from "./components/Users";
import CreateUser from "./components/CreateUser";
import EditUser from "./components/EditUser";

export default function Main() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container
        maxWidth="false"
        disableGutters={true}
        sx={{ bgcolor: "#cfe8fc", height: "auto", pb: "100px" }}
      >
        <Box
          sx={{
            width: 900,
            height: "auto",
            mx: "auto",
          }}
        >
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Users />} />
              <Route path="/create_user" element={<CreateUser />} />
              <Route path="/edit_user_/:user_id" element={<EditUser />} />
            </Routes>
          </BrowserRouter>
        </Box>
      </Container>
    </React.Fragment>
  );
}
