import { Home } from "../../components/Home/Home";
import { ClientHolder } from "../../components/Client-holder/client-holder";
import FeatureBooks from "../../components/FeatuerBooks/Featuer";
import { BestBook } from "../../components/Best-Book/bestBook";
import AllBooks from "../../components/All Books/all-books";
import { QuoteDay } from "../../components/Quote-Day/quote-day";
import { OfferBooks } from "../../components/OfferBook/offerBook";
import LatestArticles from "../../components/Latest-articles/latest-articles";
import { ContactUs } from "../../components/ContactUs/ContactUs";
import CommentSection from "../../components/CommentClient/comment-client";
export let HomePage = () => {
  localStorage.clear()
  return (
    <div className="home-page">
      <Home />
      <ClientHolder />
      <FeatureBooks />
      <BestBook />
      <AllBooks/>
      <QuoteDay/>
      <OfferBooks/>
      <LatestArticles/>
      <ContactUs/>
      <CommentSection/>
    </div>
  );
};
