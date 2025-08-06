import "./quote.css";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function QuoteDay() {
  const ref = useRef();
  const isInView = useInView(ref, {  amount: 0.3 });

  const quoteVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, delay },
    }),
  };

  return (
    <div className="quote container" ref={ref}>
      <motion.h1
        className="quote-title"
        variants={quoteVariant}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        custom={0.1}
      >
        Quote of the day
      </motion.h1>

      <motion.q
        className="discreption-quote"
        variants={quoteVariant}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        custom={0.3}
      >
        “The more that you read, the more things you will know. The more <br />
        that you learn, the more places you’ll go.”
      </motion.q>

      <motion.p
        className="auther-quote"
        variants={quoteVariant}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        custom={0.5}
      >
        Dr. Seuss
      </motion.p>
    </div>
  );
}
