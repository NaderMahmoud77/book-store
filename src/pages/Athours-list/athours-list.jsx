import "./athour-list.css";
import { useState } from "react";
import SearchModal from "../../components/Search/search";
import { authors } from "../../data/athours";
import { BtnBack } from "../../components/Buttons/buttonBack";
import { motion } from "framer-motion";

export let AthoursList = () => {
  const [valueInput, setValueInput] = useState("");

  const authorsFilter = () => {
    if (valueInput.length >= 1) {
      return authors.filter((a) =>
        a.name.toLowerCase().startsWith(valueInput.toLowerCase())
      );
    } else {
      return authors;
    }
  };

  const filteredAuthors = authorsFilter();

  return (
    <div className="athour-list">
      <div className="athour-search-wrapper">
        <SearchModal
          title="Find a Author"
          text="Find your favorite author"
          valueInput={valueInput}
          setValueInput={setValueInput}
        />
      </div>

      {filteredAuthors.length === 0 ? (
        <p className="athour-not" style={{ padding: "1rem", textAlign: "center", color: "#777" }}>
          No authors found.
        </p>
      ) : (
        <div className="authors">
          {filteredAuthors.map((a, i) => (
            <motion.div
              key={a.id}
              className="author-list"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <div className="author-banner">
                <img src={a.image} alt={a.name} />
              </div>
              <h3 className="author-name">{a.name}</h3>
            </motion.div>
          ))}
        </div>
      )}

      <BtnBack />
    </div>
  );
};
