// Mui
import { Button } from "@mui/material";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Tooltip from "@mui/material/Tooltip";
import { Link } from "react-router-dom";

// 
export let SeeMoreBtn = ({ title, func , id}) => {

  

  return (
    <Link to={title === "See More..." ? `/details/${id}` : ""}>
      <Tooltip title="See More..." followCursor>
        <Button
          className="add-to-cart-and-see-more"
          variant="contained"
          endIcon={<InfoOutlinedIcon />}
          onClick={func}
        >
          {title}
        </Button>
      </Tooltip>
    </Link>
  );
};
