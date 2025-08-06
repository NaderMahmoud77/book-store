import "./book-details.css";

import { useParams } from "react-router-dom";

import { books } from "../../data/books";
import { featureOnBook } from "../../data/featuerOnBook";
import { offerOnBook } from "../../data/offerOnBook";

import { BookDetailsCard } from "./book-details-card";
// redux
import { useDispatch } from "react-redux";
import { SnackActions } from "../../Redux-Slice/snack-slice";
import { useEffect } from "react";

export function DetailsBooks() {
  let { id } = useParams();

  let dispatch = useDispatch();

  function showSnack() {
    dispatch(
      SnackActions.showSnack({
        open: true,
        message: "Successfully added to cart.",
      })
    );

    setTimeout(() => {
      dispatch(SnackActions.hidSnack());
    }, 3000);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  });

  let allBooks = [...books, ...featureOnBook, ...offerOnBook];

  let book = allBooks.find((b) => b.id.toString() === id);

  if (!book) return <div>No book found</div>;

  return (
    <>
      <div className="book-details">
        <BookDetailsCard book={book} showSnack={showSnack} />
      </div>
    </>
  );
}
