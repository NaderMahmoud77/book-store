import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
export let CartHeader = () => {

  let carts = useSelector((state) => state.cart)

  let length = carts.length
  let num = length > 0
  return (
    <Link to="/cart">
      <div className="cart-header">
        <div className="cart">
          <ShoppingCartOutlinedIcon className="cart-icon" />
          <div className={num ? 'num' : ''} >{num && length }</div>
        </div>
      </div>
    </Link>
  );
};
