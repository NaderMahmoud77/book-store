import Box from "@mui/material/Box";
import Snackbar from "@mui/material/Snackbar";
import { useSelector } from "react-redux";

export default function PositionedSnackbar() {
  let {openSnackForm , message} = useSelector((state) => state.snackForm);

  return (
    <Box sx={{ width: 500 }}>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={openSnackForm}
        message={message}
        key={`topright`}
      />
    </Box>
  );
}
