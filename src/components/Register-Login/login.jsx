import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
// LoginForm component
import LoginForm from "./loginForm";  

export default function LoginModal({ open, onClose }) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="login-modal">
        <Typography className="title-account" variant="h6" component="h2">
          Login
        </Typography>
        <LoginForm onClose={onClose} />
      </Box>
    </Modal>
  );
}
