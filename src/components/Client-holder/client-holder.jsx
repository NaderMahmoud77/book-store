import "./client-holder.css";
import { motion } from "framer-motion";

export let ClientHolder = () => {
  let images = [
    { src: process.env.PUBLIC_URL + "/images/Clint/client-image1.png", delay: 0 },
    { src: process.env.PUBLIC_URL + "/images/Clint/client-image3.png", delay: 0.2 },
    { src: process.env.PUBLIC_URL + "/images/Clint/client-image2.png", delay: 0.4 },
    { src: process.env.PUBLIC_URL + "/images/Clint/client-image4.png", delay: 0.6 },
    { src: process.env.PUBLIC_URL + "/images/Clint/client-image5.png", delay: 0.8 },
  ];

  return (
    <div className="client-holder">
      {images.map((img, index) => (
        <motion.img
          key={index}
          src={img.src}
          alt="Client Holder"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: img.delay }}
          viewport={{ amount: 0.2 }}
        />
      ))}
    </div>
  );
};
