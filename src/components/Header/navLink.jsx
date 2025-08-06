/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
// Router
import { useNavigate } from "react-router-dom";
// Mui
import Tooltip from "@mui/material/Tooltip";

import { Link } from "react-scroll";

/////////////////
export let NaveLinks = ({ value, closeDrawer }) => {
  let [selectedPage, setSelectedPage] = useState("");
  const navigate = useNavigate();

  let handlePageChange = (event) => {
    const value = event.target.value;
    setSelectedPage(value);
    if (value === "") {
      navigate("/");
    } else {
      navigate(`/${value}`);
    }

    // If a closeDrawer function is passed, call it to close the drawer
    if (closeDrawer) {
      closeDrawer();
    }
  };

  return (
    <nav className={`nav-links ${value}`}>
      <ul>
        <li className="active-link">
          <span className="separator"></span>
          <a href="/">Home</a>
        </li>
        <li>
          <span className="separator"></span>

          <Tooltip title="Click My Show Pages" followCursor>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}{" "}
            <a>
              <select
                className="page-select"
                value={selectedPage}
                onChange={handlePageChange}
                onClick={(e) => e.stopPropagation()}
              >
                <option value="">pages</option>
                <option value="books">Books</option>
                <option value="athours">Athours</option>
                <option value="artical">Artical</option>
              </select>
            </a>
          </Tooltip>
        </li>
        <Link to="feature" smooth={true} duration={500} offset={-80}>
          <li>
            <span className="separator"></span>
            Featured
          </li>
        </Link>
        <Link to="offer" smooth={true} duration={500} offset={-80}>
          <li>
            <span className="separator"></span>
            Offer
          </li>
        </Link>
        <Link to="contact" smooth={true} duration={500} offset={-80}>
          <li>
            <span className="separator"></span>
            Contact
          </li>
        </Link>
      </ul>
    </nav>
  );
};
