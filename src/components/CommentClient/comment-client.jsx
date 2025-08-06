import "./CommentSection.css";
import { comment } from "../../data/comment";
import { motion } from "framer-motion";

export default function CommentSection() {
  return (
    <div className="reviews-section container">
      <h2 className="title">What Our Customers Say 💬</h2>
      <div className="reviews-grid">
        {comment.map((review, index) => (
          <motion.div
            className="review-card"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="review-header">
              <div className="avatar">
                {review.name.split(" ")[0][0]}
                {review.name.split(" ")[1][0]}
              </div>
              <div>
                <div className="review-name">{review.name}</div>
                <div className="review-date">{review.date}</div>
              </div>
            </div>
            <p className="review-comment">“{review.comment}”</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
