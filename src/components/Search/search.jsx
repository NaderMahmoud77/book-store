import * as React from "react";
import {
  Button,
  Modal,
  Box,
  TextField,
  Typography,
  IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import Tooltip from "@mui/material/Tooltip";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 350,
  bgcolor: "background.paper",
  borderRadius: "12px",
  boxShadow: 24,
  p: 4,
};

export default function SearchModal({
  title,
  text,
  valueInput,
  setValueInput,
}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="search-modal">
      <Tooltip title="Search" followCursor>
        <Button className="search" variant="contained" onClick={handleOpen}>
          {text && text}
          <SearchIcon style={{marginLeft: text && '10px'}}/>
        </Button>
      </Tooltip>

      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={2}
          >
            <Typography variant="h6">{title}</Typography>
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>
          <TextField
            fullWidth
            label="Search for a book"
            variant="outlined"
            autoFocus
            value={valueInput}
            onChange={(e) => {
              setValueInput(e.target.value);
            }}
          />
        </Box>
      </Modal>
    </div>
  );
}
