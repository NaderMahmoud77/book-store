import "./App.css";
// Routes
import { Routes, Route } from "react-router";
// Components
import { Header } from "./components/Header/header";
import {HomePage} from "./pages/HomePages/homePage";
import Footer from "./components/Footer/Footer";
import { BookList } from "./pages/Book-list/book-list";
import { AthoursList } from "./pages/Athours-list/athours-list";
import { DetailsBooks } from "./pages/Details-books/details-book";
import { Cart } from "./pages/Cart/cart";
import { ButtonScrollToTop } from "./components/Buttons/button-scroll-top";
import { ListArtical } from "./pages/Lastest-Articals/lastest-articals";


function App() {

 

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={< HomePage/>} />
        <Route path="/books" element={<BookList/>} />
        <Route path="/athours" element={<AthoursList/>} />
        <Route path="/details/:id" element={<DetailsBooks/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/artical" element={<ListArtical />} />
      </Routes>
      <Footer/>
      <ButtonScrollToTop/>
    </>
  );
}

export default App;
