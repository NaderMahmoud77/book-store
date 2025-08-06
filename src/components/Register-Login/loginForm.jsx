// components/LoginForm.jsx
import React, { useState } from "react";
import { TextField, Button, Stack } from "@mui/material";

//////////
export default function LoginForm({ onClose }) {
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setCredentials((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // onClose(); 
  };

  return (
    <form onSubmit={handleLogin}>
      <Stack spacing={2}>
        <TextField
          label="Email"
          name="email"
          type="email"
          fullWidth
          value={credentials.email}
          onChange={handleChange}
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          fullWidth
          value={credentials.password}
          onChange={handleChange}
        />
        <Button variant="contained" type="submit">
          Login
        </Button>
      </Stack>
    </form>
  );
}
