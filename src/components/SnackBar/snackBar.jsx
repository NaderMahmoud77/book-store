import Snackbar from "@mui/material/Snackbar";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Alert from "@mui/material/Alert";
import Box from "@mui/material/Box";

import { useSelector } from "react-redux";

export default function SnackbarSuccess() {
  let { openSnack, message } = useSelector((state) => state.snack);

  return (
    <>
      <Snackbar open={openSnack} className="snackBar">
        <Alert
          severity="success"
          sx={{
            width: "100%",
            backgroundColor: "#fff176",
            color: "#000",
            border: "1px solid #fdd835",
            fontWeight: "bold",
          }}
          icon={false}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            {message}
            <CheckCircleIcon sx={{ color: "#4caf50", marginLeft: 1 }} />
          </Box>
        </Alert>
      </Snackbar>
    </>
  );
}
