import "./featuer.css";
import { useState } from "react";
// Data
import { featureOnBook } from "../../data/featuerOnBook";
// Single Book
import { FeatuerSingleBook } from "./featuerSingleBook";
// Modal
import { ModalBook } from "../Modal-Book/modal-Book";

/////////
function FeatureBooks() {
  const [openModal, setOpenModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const handleOpenModal = (book) => {
    setSelectedBook(book);
    setOpenModal(true);
  };

  // Render the feature books
  const renderFeatureBooks = () => {
    return featureOnBook.map((book, i) => (
      <FeatuerSingleBook
        key={book.id}
        book={book}
        index={i}
        onViewDetails={() => handleOpenModal(book)}
      />
    ));
  };

  return (
    <div className="feature-books container" id="feature">
      <p className="sub-title">Some quality items</p>
      <h2 className="title">Featured Books</h2>

      <div className="feature-books-list">{renderFeatureBooks()}</div>

      {/* show book detilse modal */}
      {selectedBook && (
        <ModalBook
          book={selectedBook}
          openModal={openModal}
          onClose={() => setOpenModal(false)}
        />
      )}
    </div>
  );
}

export default FeatureBooks;
