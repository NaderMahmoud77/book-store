import "./all-books.css";
import { useState } from "react";
// Data
import { books } from "../../data/books";
// Single Book
import Book from "./book";
// Input Filter BOOk
import { FilterBooks } from "./filter-books";

import { ModalBook } from "../Modal-Book/modal-Book";

function AllBooks() {
  let [selectedId, setSelectedId] = useState("business");
  let [selectedBook, setSelectedBook] = useState("");
  let [openModal, setOpenModal] = useState(false);

  function handleClick(book) {
    setSelectedBook(book);
    setOpenModal(true);
    
  }

  let file = books.filter((b) => {
    return selectedId === "business"
      ? b.business
      : selectedId === "romantic"
      ? b.romantic
      : selectedId === "selfDevelopment"
      ? b.selfDevelopment
      : "";
  });

  let bookSingle = file.map((b, i) => {
    return (
      <Book key={b.id} book={b} index={i} onViweModal={() => handleClick(b)} lengthBook={file.length}/>
    );
  });

  return (
    <>
      <div className="all-books" id="allBook">
        <div className="sub-title">Some quality items</div>
        <h2 className="title">All Books</h2>
        <FilterBooks selectedId={selectedId} setSelectedId={setSelectedId} />
        <div className="book-list container">{bookSingle}</div>
      </div>

      {/* Modal Details */}
      <ModalBook
        book={selectedBook}
        openModal={openModal}
        onClose={() => setOpenModal(false)}
      />
    </>
  );
}

export default AllBooks;
