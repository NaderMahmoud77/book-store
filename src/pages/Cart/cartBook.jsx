import { Button } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export function CartBook({ book, setOpenDialog, setSelectDelete , i}) {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false, 
    threshold: 0.2,         
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: i * 0.2 , ease: "easeOut" },
      });
    } else {
      controls.start({
        opacity: 0,
        y: 50,
      });
    }
  }, [inView, controls]);

  return (
    <motion.div
      className="cart-book"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
    >
      <img
        src={book.image}
        alt={book.title || "Book"}
        className="cart-book-img"
      />

      <div className="cart-book-info">
        <p className="cart-book-title">{book.title}</p>
        <p className="cart-book-author">By {book.author}</p>

        {book?.disc && (
          <p className="cart-book-disc">
            <b>Discount:</b> {book.disc}
          </p>
        )}

        <div className="cart-book-price-box">
          <p className="cart-book-price">
            <b>Price:</b> <span>${book.price}</span>
          </p>

          {book?.offerPrice && (
            <p className="cart-book-offer">
              <b>Offer:</b> <span>${book.offerPrice}</span>
            </p>
          )}

          {book?.sale && (
            <p className="cart-book-sale">
              <b>Sale:</b> <span>{book.sale}%</span>
            </p>
          )}
        </div>

        <p className="cart-book-quantity">
          <b>Quantity:</b> <span>{book?.quantity || 1}</span>
        </p>

        <Button
          className="delete-btn"
          onClick={() => {
            setSelectDelete(book.id);
            setOpenDialog(true);
          }}
          endIcon={<DeleteIcon />}
        >
          Delete
        </Button>
      </div>
    </motion.div>
  );
}
