import "./footer.css";
// Mui
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

// Animation
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function Footer() {
  const footerRef = useRef();
  const isInView = useInView(footerRef, { once: false, amount: 0.2 });

  // Animation variants
  const boxVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: (customDelay) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: customDelay,
      },
    }),
  };

  return (
    <footer
      ref={footerRef}
      className="footer"
      style={{
        background: "#222",
        color: "#fff",
        padding: "30px 15px 10px",
      }}
    >
      <div className="footer-content container">
        {/* Box 1 */}
        <motion.div
          className="box-1"
          variants={boxVariant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={0.2}
        >
          <img src="./images/Clint/client-image3.png" alt="client" />
          <div className="social-footer">
            <FacebookIcon className="icon" />
            <InstagramIcon className="icon" />
            <TwitterIcon className="icon" />
            <LinkedInIcon className="icon" />
          </div>
          <p className="footer-text">
            We are happy to communicate with you <br /> via social media at any
            time.
          </p>
        </motion.div>

        {/* Box 2 */}
        <motion.div
          className="box-2"
          style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          variants={boxVariant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={0.4}
        >
          <h3>Quick Link</h3>
          <a href="/">
            <DoubleArrowIcon /> <span>Home</span>
          </a>
          <a href="#feature">
            <DoubleArrowIcon /> <span>Feature</span>
          </a>
          <a href="#allBook">
            <DoubleArrowIcon /> <span>All Book</span>
          </a>
          <a href="#offer">
            <DoubleArrowIcon /> <span>Offer Book</span>
          </a>
          <a href="#latest">
            <DoubleArrowIcon /> <span>Latest Articles</span>
          </a>
        </motion.div>

        {/* Box 3 */}
        <motion.div
          className="box-3"
          variants={boxVariant}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={0.6}
        >
          {[
            process.env.PUBLIC_URL + "/images/Books/product-item11.jpg",
            process.env.PUBLIC_URL + "/images/Books/product-item7.jpg",
            process.env.PUBLIC_URL + "/images/Books/product-item10.jpg",
            process.env.PUBLIC_URL + "/images/Books/product-item17.jpg",
            process.env.PUBLIC_URL + "/images/Books/product-item18.jpg",
            process.env.PUBLIC_URL + "/images/Books/product-item14.jpg",
          ].map((src, i) => (
            <img key={i} src={src} alt={`book-${i}`} />
          ))}
        </motion.div>
      </div>

      <hr />

      <div className="copyright">
        Design and development:{" "}
        <a
          href="https://github.com/NaderMahmoud77"
          target="_blank"
          rel="noreferrer"
        >
          nader
        </a>{" "}
        | All rights reserved <b>&copy;</b> 2025.
      </div>
    </footer>
  );
}

export default Footer;
