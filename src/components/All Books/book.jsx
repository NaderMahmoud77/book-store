import { SeeMoreBtn } from "../Buttons/buttonSeeMore";
// Mui
import { Divider, Chip } from "@mui/material";
// Framer motion
import { motion } from "framer-motion";

function Book({ book, index, onViweModal, lengthBook }) {
  return (
    <motion.div
      className="book"
      initial={{ opacity: 0, rotateY: 180 }}
      whileInView={{ opacity: 1, rotateY: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{  amount: 0.3 }}
    >
      <div className="book-banner">
        <img src={book.image} alt={book.title} />
      </div>
      <h2>{book.title}</h2>
      <p className="author-book">by {book.author}</p>
      <p className="rating">{book.rating}</p>
      <div className="price-sale">
        <span className="price">${book.price}</span>
        <span className="sale">${book.sale}</span>
      </div>
      <SeeMoreBtn title="view details" func={onViweModal} />

      {/* Next Book */}
      {index < lengthBook - 1 && (
        <Divider sx={{ my: 3 }} className="next-book">
          <Chip label="Next Book" color="primary" className="next-chip" />
        </Divider>
      )}
    </motion.div>
  );
}

export default Book;
