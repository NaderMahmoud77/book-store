import "./best-book.css";
import { SeeMoreBtn } from "../Buttons/buttonSeeMore";
import { motion } from "framer-motion";
import { Button } from "@mui/material";

export let BestBook = () => {
  return (
    <div className="best">
      <div className="best-book container">
        <motion.div
          className="best-banner"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ amount: 0.3 }}
        >
          <img
            src={process.env.PUBLIC_URL + "/images/BestBook/single-image.jpg"}
            alt=""
          />
        </motion.div>

        <motion.div
          className="best-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          viewport={{ amount: 0.3 }}
        >
          <h2 className="best-title-content">Best Selling Book</h2>
          <span className="text">By Timbur Hood</span>
          <p className="text-2">Birds gonna be happy</p>
          <span className="lorem">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu
            feugiat amet, libero ipsum enim pharetra hac.
          </span>
          <div className="book-best-price">$45.00</div>
          <Button className="the-best">The Best</Button>
        </motion.div>
      </div>
    </div>
  );
};
