// components/RegisterForm.jsx
import React, { useState } from "react";
import { TextField, Button, Stack } from "@mui/material";
import PositionedSnackbar from "../SnackBar/snackBarForm";

import { useDispatch } from "react-redux";
import { SnackFormActions } from "../../Redux-Slice/snack-form";

export default function RegisterForm({ onSuccessRegister }) {
  let dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Event Handler
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      dispatch(SnackFormActions.showSnack("Passwords do not match."));
      setTimeout(() => {
        dispatch(SnackFormActions.hidSnack());
      }, 3000);
    } else if (formData.name === "") {
      dispatch(SnackFormActions.showSnack("Name is required."));
      setTimeout(() => {
        dispatch(SnackFormActions.hidSnack());
      }, 3000);
    } else if (formData.email === "") {
      dispatch(SnackFormActions.showSnack("Email is required."));
      setTimeout(() => {
        dispatch(SnackFormActions.hidSnack());
      }, 3000);
    } else if (formData.password === "" && formData.confirmPassword === "") {
      dispatch(SnackFormActions.showSnack("Password is required."));
      setTimeout(() => {
        dispatch(SnackFormActions.hidSnack());
      }, 3000);
    } else {
      onSuccessRegister()
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={2}>
        <TextField
          label="Name"
          name="name"
          fullWidth
          value={formData.name}
          onChange={handleChange}
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          fullWidth
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          fullWidth
          value={formData.password}
          onChange={handleChange}
        />
        <TextField
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          fullWidth
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        <Button variant="contained" type="submit">
          Register
        </Button>
      </Stack>
      {/* Snack */}
      <PositionedSnackbar />
    </form>
  );
}
