import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import { useDispatch } from "react-redux";
import { cartActions } from "../../Redux-Slice/cart-slice";
import { SnackActions } from "../../Redux-Slice/snack-slice";

export function DialogDelete({ openDialog, setOpenDialog, id }) {
  let dispatch = useDispatch();

  // Event Handle
  function eventHandler() {
    dispatch(cartActions.removeBook(id));
    dispatch(
      SnackActions.showSnack({
        open: true,
        message: "Book removed from cart",
      })
    );

    setTimeout(() => {
      dispatch(SnackActions.hidSnack());
    }, 5000);

    handleClose();
  }

  function handleClose() {
    setOpenDialog(false);
  }

  return (
    <>
      <Dialog
        open={openDialog}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Are you sure you want to delete the book?
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            style={{ fontSize: "20px" }}
          >
            When you click Confirm, the product will be removed from the
            shopping cart. If you do not want to remove it, click No
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            <h3 className="dialog-no">No</h3>
          </Button>
          <Button onClick={eventHandler}>
            <h3 className="dialog-yes">Sure</h3>
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
