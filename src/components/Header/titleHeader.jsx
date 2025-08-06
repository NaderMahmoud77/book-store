// React + Framer Motion
import { motion } from "framer-motion";

// Mui
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

export let TitleHeader = () => {
  return (
    <motion.div
      className="contact-header"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="location-and-time">
        <motion.div
          className="location"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <LocationOnOutlinedIcon />
          <p>Book Store , Mansoura – El Gomhoria</p>
        </motion.div>

        <span className="separator"></span>

        <motion.div
          className="time"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <AccessTimeIcon />
          <p>Open 9:00 AM - 10:00 PM</p>
        </motion.div>
      </div>

      <div className="telephone-and-email">
        <motion.div
          className="telephone"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <CallOutlinedIcon />
          <p>
            <a href="tel:+20103425587">+20103425587</a>
          </p>
        </motion.div>

        <span className="separator"></span>

        <motion.div
          className="email"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9 }}
        >
          <EmailOutlinedIcon />
          <p>
            <a href="mailto:BookStore@mansora.com">BookStore@mansora.com</a>
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};
