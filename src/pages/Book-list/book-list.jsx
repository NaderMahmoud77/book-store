import "./book-list.css";
import { ModalBook } from "../../components/Modal-Book/modal-Book";

import { BookFilter } from "./book-filter";
import { BookSingleItem } from "./book-list-single";
import { useEffect, useState } from "react";
// Data
import { books } from "../../data/books";
// Mui
import Pagination from "@mui/material/Pagination";
import { BtnBack } from "../../components/Buttons/buttonBack";

export let BookList = () => {
  let [selectedId, setSelectedId] = useState("all");
  let [selectedBook, setSelectedBook] = useState("");
  let [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  //  Event Handle
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
      : selectedId === "all"
      ? b
      : "";
  });

  //   pagination
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 8;

  const startIndex = (currentPage - 1) * totalPages;
  const endIndex = startIndex + totalPages;
  const paginatedBooks = file.slice(startIndex, endIndex);

  let bookSingle = paginatedBooks.map((b, i) => {
    return (
      <BookSingleItem
        key={b.id}
        book={b}
        index={i}
        onViweModal={() => handleClick(b)}
        lengthBook={file.length}
      />
    );
  });

  return (
    <div className="book-lists container">
      <div className="book-filter">
        <BookFilter
          selectedId={selectedId}
          setSelectedId={setSelectedId}
          setCurrentPage={setCurrentPage}
        />
      </div>
      <div className="book-list">{bookSingle}</div>

      <ModalBook
        openModal={openModal}
        book={selectedBook}
        onClose={() => setOpenModal(false)}
      />

      {/* Pagination */}
      <div className="pagination-wrapper">
        <Pagination
          count={Math.ceil(file.length / totalPages)}
          page={currentPage}
          onChange={(e, value) => setCurrentPage(value)}
          shape="rounded"
          color="primary"
        />
      </div>

      {/* Btn Back Page */}
      <BtnBack />
    </div>
  );
};
