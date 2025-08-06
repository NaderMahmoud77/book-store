/* eslint-disable jsx-a11y/iframe-has-title */
// Animation
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
// MUI
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

import "./contact.css";
import { useState } from "react";

export let ContactUs = () => {
  // click send show loading
  let [loading, setLoading] = useState(false);

  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.3 });

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  return (
    <div className="contact" id="contact">
      <h2 className="title title-contact-us">Contact us</h2>
      <motion.div
        ref={ref}
        initial={{ y: 80, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="contact-us container"
      >
        <div className="cont">
          <h1 className="title-contact">Contact us</h1>

          {/* INPUTS */}
          <form>
            <div>
              <label>Name</label>
              <input placeholder="name" className="name" autoComplete="off" />
            </div>

            <div>
              <label>Email</label>
              <input
                type="email"
                className="email"
                placeholder="Enter your email"
              />
            </div>

            <div className="textera">
              <label>Message</label>
              <textarea placeholder="Send us a message" />
            </div>

            {/* SEND MESSAGE */}
            <motion.div whileTap={{ scale: 0.95 }} whileHover={{ scale: 1.02 }}>
              <Button
                type="submit"
                variant="contained"
                className={loading ? "Sending" : "send"}
                disabled={loading}
                onClick={(e) => {
                  e.preventDefault();
                  setLoading(true);
                  setTimeout(() => setLoading(false), 3000);
                }}
                endIcon={<SendIcon />}
              >
                {loading ? "sending..." : "Send"}
              </Button>
            </motion.div>
            {/* ===== SEND MESSAGE ===== */}
          </form>
          {/* ===== INPUTS ===== */}
        </div>
        {/* iamge */}
        <div className="contact-map">
          <div className="location-time-phone-emial">
            <div className="location-time">
              <p>
                <LocationOnIcon className="mapicon" />
                 <strong>Address:</strong> Al Gomhoria Street, Mansoura
              </p>
              <p>
                 <AccessTimeIcon className="mapicon" />
                <strong>Working Hours:</strong> 9:00 AM - 10:00 PM
              </p>
            </div>
            <div className="phone-emial">
              <p>
                <EmailIcon className="mapicon" style={{  marginRight: "8px" }} />
                 <strong>Email:</strong> BookStore@mansora.com
              </p>
              <p>
                <PhoneIcon className="mapicon" style={{  marginRight: "8px" }}/>
                 <strong>Phone:</strong> 0103425587
              </p>
            </div>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.3599492659916!2d31.37703187557418!3d31.040226774541266!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f79db80f59a245%3A0xa6a645acfbac6c2e!2z2YXYr9mK2YbZitipINin2YTZgtmF2YjYqSDYp9mE2LTYsdmK2Kkg2KfZhNin2K_Yp9iqINmI2YTYrtmE2YrYqQ!5e0!3m2!1sar!2seg!4v1690295343291!5m2!1sar!2seg"
            width="100%"
            height="350"
            style={{ border: 0, borderRadius: "10px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        {/* === iamge === */}
      </motion.div>
    </div>
  );
};
