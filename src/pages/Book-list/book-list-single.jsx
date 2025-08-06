import { SeeMoreBtn } from "../../components/Buttons/buttonSeeMore";
// Mui
import { Divider, Chip } from "@mui/material";
// Framer Motion
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export let BookSingleItem = ({ book, onViweModal, index, lengthBook }) => {
  const ref = useRef();
  const inView = useInView(ref, { amount: 0.2 });

  return (
    <motion.div
      className="book-single"
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
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
      {/* Btn See More */}
      <SeeMoreBtn title="view details" func={onViweModal} />

      {/* Next Book */}
      {index < lengthBook - 1 && (
        <Divider sx={{ my: 3 }} className="next-book">
          <Chip label="Next Book" color="primary" className="next-chip" />
        </Divider>
      )}
    </motion.div>
  );
};
