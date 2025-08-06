import "./cart.css";
import { CartBook } from "./cartBook";
// redux
import { useSelector } from "react-redux";
// Mui
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Button } from "@mui/material";
import { DialogDelete } from "../../components/Dialog/dialog";
import { useEffect, useState } from "react";
import { BtnBack } from "../../components/Buttons/buttonBack";
// SnackBar
import SnackbarSuccess from "../../components/SnackBar/snackBar";

//////
export function Cart() {
  let [openDialog, setOpenDialog] = useState(false);
  let [selectDelete, setSelectDelete] = useState("");
  let carts = useSelector((state) => state.cart);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let cart = carts.map((b, i) => {
    return (
      <CartBook
        key={b.id}
        book={b}
        setOpenDialog={setOpenDialog}
        setSelectDelete={setSelectDelete}
        i={i}
      />
    );
  });

  // Total Price
  const total = carts.reduce((sum, book) => {
    const quantity = book.quantity || 1;

    let price = 0;

    if (book.sale) {
      price = +book.sale;
    } else if (book.offerPrice) {
      price = +book.offerPrice;
    } else if (book.disc) {
      const discount = parseFloat(book.disc) / 100;
      price = +book.price * (1 - discount);
    } else {
      price = +book.price;
    }

    return sum + price * quantity;
  }, 0);

  // JSX
  return (
    <>
      {carts.length > 0 ? (
        <>
          <div className="cart container">
            <div className="carts">{cart}</div>
            <div className="bar-cart">
              <div className="icon-text">
                <CheckCircleIcon />
                <p className="text-p">
                  Part of the shipping questions. Select this option when
                  submitting your payment details.
                </p>
              </div>
              <div className="total">
                <b>Total:</b> {total}$
              </div>
              <Button className="btn-cart-total">Track your purchases</Button>
            </div>
          </div>

          <DialogDelete
            openDialog={openDialog}
            setOpenDialog={setOpenDialog}
            id={selectDelete}
          />
        </>
      ) : (
        <div className="not">
          <h2 className="not-found">Oops! Your shopping cart is empty.</h2>
          <img
            src="/images/BestBook/not-found-cart.jpg"
            alt=""
            className="image-not-found"
          />
        </div>
      )}

      {/* Button Back */}
      <BtnBack />

      {/* Snack Bar */}
      <SnackbarSuccess />
    </>
  );
}
