import { useRef, useState, useEffect } from "react";
import "./offerBook.css";
import { offerOnBook } from "../../data/offerOnBook";
import { OfferSingleBook } from "./offerSingleBook";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { ModalBook } from "../Modal-Book/modal-Book";

export function OfferBooks() {
  const swiperRef = useRef();
  const [selectedBook, setSelectedBook] = useState("");
  const [openModal, setOpenModal] = useState(false);
  const [coverflowEffect, setCoverflowEffect] = useState({
    rotate: 0,
    stretch: 0,
    depth: 180,
    modifier: 2.5,
    slideShadows: false,
  });

  // Handle Book Click
  function handleClick(book) {
    setSelectedBook(book);
    setOpenModal(true);
  }

  // Set responsive effect on mount
  useEffect(() => {
    const width = window.innerWidth;

    if (width <= 480) {
      setCoverflowEffect({
        rotate: 0,
        stretch: 0,
        depth: 80,
        modifier: 1.2,
        slideShadows: false,
      });
    } else if (width <= 768) {
      setCoverflowEffect({
        rotate: 0,
        stretch: 0,
        depth: 120,
        modifier: 1.5,
        slideShadows: false,
      });
    } else if (width <= 1024) {
      setCoverflowEffect({
        rotate: 0,
        stretch: 0,
        depth: 150,
        modifier: 2,
        slideShadows: false,
      });
    }
  }, []);

  const breakpoints = {
    320: { spaceBetween: -10 },
    480: { spaceBetween: -20 },
    768: { spaceBetween: -30 },
    1024: { spaceBetween: -0 },
  };

  const initialSlide = Math.floor(offerOnBook.length / 2);

  return (
    <div className="offer-books" id="offer">
      <p className="sub-title">Grab your opportunity</p>
      <h1 className="title">Books with offer</h1>

      {/* Arrow */}

      <div className="swipe-hint-container">
        <div className="swipe-hint">
          <span className="swipe-arrow">←</span>
          <span className="swipe-text">Swipe to explore</span>
          <span className="swipe-arrow">→</span>
        </div>
      </div>

      <Swiper
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView="auto"
        spaceBetween={-40}
        initialSlide={initialSlide}
        coverflowEffect={coverflowEffect}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        modules={[EffectCoverflow, Pagination]}
        breakpoints={breakpoints}
        className="book-slider mySwiper"
      >
        {offerOnBook.map((b, i) => (
          <SwiperSlide key={b.id}>
            <OfferSingleBook
              book={b}
              i={i}
              swiperRef={swiperRef}
              onViweModal={() => handleClick(b)}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <ModalBook
        book={selectedBook}
        openModal={openModal}
        onClose={() => setOpenModal(false)}
      />
    </div>
  );
}
