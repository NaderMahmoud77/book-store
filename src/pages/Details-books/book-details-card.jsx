import "./book-details.css";
import { useState } from "react";
// Mui
import TextField from "@mui/material/TextField";
// Add To Cart
import { AddCartBtn } from "../../components/Buttons/buttonAddCart";
import { useEffect } from "react";
import { BtnBack } from "../../components/Buttons/buttonBack";
// redux
import { useDispatch } from "react-redux";
import { cartActions } from "../../Redux-Slice/cart-slice";
// Animation
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function BookDetailsCard({ book, showSnack }) {
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Animation
  let controls = useAnimation();
  let [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.9, delay: 0.2 },
      });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [inView]);

  return (
    <div className="container">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
        className="details-card"
      >
        <img src={book.image} alt={book.title} className="book-image" />

        <h4 className="book-title">{book.title}</h4>

        {book.author && <p className="book-author">by {book.author}</p>}

        {book.rating && <div className="book-rating">{book.rating}</div>}

        <div className="price-box">
          {book.sale || book.offerPrice ? (
            <>
              <p className="old-price">${book.price}</p>
              <p className="new-price">{book.sale || `$${book.offerPrice}`}</p>
            </>
          ) : (
            <p className="new-price">${book.price}</p>
          )}
        </div>

        <div className="tags">
          {book.disc && <span className="tag">Discount: {book.disc}</span>}
          {!book.disc && !book.business ? (
            <span className="tag">Feature</span>
          ) : (
            ""
          )}
          {book.business && <span className="tag">Business</span>}
        </div>

        <hr className="divider" />

        <div className="buttons-box">
          <TextField
            label="Quantity"
            type="number"
            InputProps={{ inputProps: { min: 1, max: 10 } }}
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            size="small"
            className="text-field"
          />
          <AddCartBtn addTocart={addTocart} showSnack={showSnack} />
        </div>

        {/* Button Back */}
        <BtnBack />

        <div className="description-box">
          <p>
            This book offers a fresh perspective on the modern business world,
            blending personal stories and research-backed insights. Whether
            you're an entrepreneur or a lifelong learner, it provides practical
            ideas that challenge traditional thinking and help shape a more
            intentional life.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
