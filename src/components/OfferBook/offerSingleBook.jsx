import { SeeMoreBtn } from "../Buttons/buttonSeeMore";

export function OfferSingleBook({ book, i, swiperRef, onViweModal }) {
  return (
    <div className="book-item">
      <div
        className="book-banner-offer"
        onClick={() => swiperRef.current?.slideTo(i)}
      >
        <img src={book.image} alt={book.title} />
      </div>
      <p>{book.title}</p>
      <div className="author-offer">by {book.author}</div>
      <p>{book.rating}</p>
      <div className="discount-offer">🔥{book.disc}</div>
      <div className="price-offer">${book.price}</div>
      <SeeMoreBtn title="viwe details" func={onViweModal} />
    </div>
  );
}
