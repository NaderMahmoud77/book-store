import "./home.css";
import { motion } from "framer-motion";

// Mui
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export let Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      className="home container"
    >
      <div className="content-home">
        <h1>Discover a World of Books 📚</h1>
        <p>
          Unlock new ideas, powerful stories, and timeless knowledge — all just
          a click away.
        </p>
        <p>
          Find your next favorite book and join a community of book lovers just
          like you.
        </p>
        <Link to="/books">
          <Button className="btn-home" variant="contained">
            Explore Books📖
          </Button>
        </Link>
      </div>

      <motion.div
        animate={{ scale: [1, 1.05, 1] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      >
        <div className="banner-home">
          <img
            src={process.env.PUBLIC_URL + "/images/BestBook/book-4(12(.jpg"}
            alt="home-image"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};
