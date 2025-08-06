import { motion } from "framer-motion";
// Mui
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { BtnBack } from "../../components/Buttons/buttonBack";

export function Artical({ artical, index }) {
  return (
    <>
      <motion.div
        className="artical-item"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: index * 0.1,
        }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <div className="banner-articals">
          <img src={artical.img} alt={artical.title} />
        </div>
        <p className="date-article">{artical.date}</p>
        <h3>{artical.title}</h3>
        <hr />
        <div className="social">
          <span className="text-article">{artical.text}</span>
          <div className="icons-artical">
            <FacebookIcon />
            <InstagramIcon />
            <TwitterIcon />
            <LinkedInIcon />
          </div>
        </div>
      </motion.div>

      {/* Button Back */}
      <BtnBack />
    </>
  );
}
