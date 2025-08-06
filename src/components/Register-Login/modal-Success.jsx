// Mui
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

////////
export let ModalForm = ({ openShow, onClose }) => {
  return (
    <Modal
      open={openShow}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: {
            xs: "90%",
            sm: 400,
          },
          bgcolor: "#e6ffed",
          boxShadow: 24,
          p: {
            xs: 2,
            sm: 4,
          },
          textAlign: "center",
          border: "2px solid #4caf50",
          borderRadius: 2,
        }}
      >
        <h2
          id="modal-modal-title"
          style={{
            color: "#2e7d32",
            fontWeight: "bold",
            fontSize: "1.6rem",
            marginBottom: "0.5rem",
          }}
        >
          🎉 Registration Successful!
        </h2>
        <p
          id="modal-modal-description"
          style={{
            color: "#388e3c",
            fontSize: "1.1rem",
          }}
        >
          Welcome! Your account has been created successfully. You can now log
          in and start exploring 🚀
        </p>
      </Box>
    </Modal>
  );
};
