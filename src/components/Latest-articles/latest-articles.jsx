import "./latest-articals.css";
// Mui
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Button, Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
// Animation
import { motion } from "framer-motion";
// import { useRef } from "react";

const articles = [
  {
    img: process.env.PUBLIC_URL + "/images/LatestArticles/post-img1.jpg",
    date: "Feb 27, 2025",
    title: "Reading books always makes the moments happy",
    text: "inspiration",
  },
  {
    img: process.env.PUBLIC_URL + "/images/LatestArticles/post-img2.jpg",
    date: "Feb 14, 2025",
    title: "Reading books always makes the moments happy",
    text: "inspiration",
  },
  {
    img: process.env.PUBLIC_URL + "/images/LatestArticles/post-img3.jpg",
    date: "Mar 29, 2025",
    title: "Reading books always makes the moments happy",
    text: "inspiration",
  },
];

export default function LatestArticles() {
  // const ref = useRef();
  // const isInView = useInView(ref, { amount: 0.2 });

  return (
    <section className="article container" id="latest">
      <p className="sub-title">Read our articles</p>
      <h2 className="title">Latest Articles</h2>
      <div className="article-list">
        {articles.map((article, idx) => {
          return (
            <motion.div
              className="article-item"
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.3 }}
            >
              <div className="banner">
                <img src={article.img} alt={article.title} />
              </div>
              <p className="article-date">{article.date}</p>
              <h3>{article.title}</h3>
              <hr />
              <div className="social">
                <span className="article-text">{article.text}</span>
                <div className="artical-icons">
                  <FacebookIcon />
                  <InstagramIcon />
                  <TwitterIcon />
                  <LinkedInIcon />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
      <Tooltip title="See More" followCursor>
        <Link to="/artical">
          <Button endIcon={<ArrowForwardIcon />} className="btn-article">
            read all articles
          </Button>
        </Link>
      </Tooltip>
    </section>
  );
}
