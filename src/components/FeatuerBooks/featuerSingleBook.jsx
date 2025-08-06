// Mui
import { Divider, Chip } from "@mui/material";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SeeMoreBtn } from "../Buttons/buttonSeeMore";

///// FeatuerSingleBook Component
export let FeatuerSingleBook = ({ book, onViewDetails, index }) => {
  // Animation
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <motion.div
      className="feature-book-item"
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
    >
      <div className="book-banner">
        <img src={book.image} alt={book.title} />
      </div>
      <h3>{book.title}</h3>
      <p>by {book.author}</p>
      <div className="rating">{book.rating}</div>
      <div className="price-offer">
        <span className="offer-price">${book.offerPrice}</span>
        <span className="price">${book.price}</span>
      </div>

      <SeeMoreBtn title="View Details" func={onViewDetails} />

      {/* Next Book */}
      {index <= 2 && (
        <Divider sx={{ my: 3 }} className="next-book">
          <Chip label="Next Book" color="primary" className="next-chip" />
        </Divider>
      )}
    </motion.div>
  );
};
