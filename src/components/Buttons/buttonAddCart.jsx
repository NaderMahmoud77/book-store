// Mui
import { Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Tooltip from "@mui/material/Tooltip";
import SnackbarSuccess from "../../components/SnackBar/snackBar";

export let AddCartBtn = ({ addTocart, showSnack }) => {
  return (
    <>
      <Tooltip title="Add To Cart" followCursor>
        <Button
          className="add-to-cart-and-see-more"
          variant="contained"
          endIcon={<ShoppingCartIcon />}
          onClick={() => {
            addTocart();
            showSnack();
          }}
        >
          Add To Cart
        </Button>
      </Tooltip>

      <SnackbarSuccess />
    </>
  );
};
