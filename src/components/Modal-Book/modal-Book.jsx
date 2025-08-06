// Mui
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import { useState } from "react";
import { AddCartBtn } from "../Buttons/buttonAddCart";
import { SeeMoreBtn } from "../Buttons/buttonSeeMore";
// redux
import { useDispatch } from "react-redux";
import { cartActions } from "../../Redux-Slice/cart-slice";
import { SnackActions } from "../../Redux-Slice/snack-slice";

////////
export let ModalBook = ({ book, openModal, onClose }) => {
  let [quantity, setQuantity] = useState(1);

  let dispatch = useDispatch();

  function addTocart() {
    dispatch(
      cartActions.addBook({
        id: book?.id,
        title: book?.title,
        image: book?.image,
        price: book?.price,
        offerPrice: book?.offerPrice,
        sale: book?.sale,
        disc: book?.disc,
        author: book?.author,
        quantity: quantity,
      })
    );
  }

  function showSnack() {
    dispatch(
      SnackActions.showSnack({
        open: true,
        message: "Successfully added to cart.",
      })
    );

    setTimeout(() => {
      dispatch(SnackActions.hidSnack());
    }, 3000);
  }

  return (
    <Modal
      open={openModal}
      onClose={() => {
        onClose();
        setQuantity("");
        dispatch(SnackActions.hidSnack())
      }}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box className="modal">
        <div className="modal-content">
          <div className="modal-book-banner">
            <img src={book.image} alt={book.title} />
          </div>
          <div className="modal-details">
            <h3 className="modal-title">
              <b>Title:</b> {book.title}
            </h3>
            <p>
              <b>Author:</b> {book.author}
            </p>
            <div className="rating">{book.rating}</div>
            <div className="price">
              <b>Price:</b> ${book.price}
            </div>

            <TextField
              label="Quantity"
              type="number"
              InputProps={{ inputProps: { min: 1, max: 10 } }}
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              size="small"
            />

            <AddCartBtn addTocart={addTocart} showSnack={showSnack} />

            <SeeMoreBtn title="See More..." id={book.id} />
          </div>
        </div>
      </Box>
    </Modal>
  );
};
