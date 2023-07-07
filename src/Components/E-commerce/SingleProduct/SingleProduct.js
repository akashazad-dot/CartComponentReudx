import React from "react";
import "./SingleProduct.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../../redux/Slices/CartSlice";

function SingleProduct({ product }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartReducer.cart);
  const curItem = cart.find((item) => item.id == product.id);
  const CurQuantity = curItem ? curItem.quantity : 0;
  return (
    <div className="SingleProduct">
      <img className="productImg" src={product.images[0]} alt={product.title} />

      <div className="productInfo">
        <h2 className="product-title">{product.title}</h2>
        <p className="product-price">{product.price}</p>
      </div>

      <div className="CartInfo">
        <button
          className="button"
          onClick={() => dispatch(removeFromCart(product.id))}
        >
          -
        </button>
        <h4>{CurQuantity}</h4>
        <button
          className="button"
          onClick={() => dispatch(addToCart(product.id))}
        >
          +
        </button>
      </div>
    </div>
  );
}
export default SingleProduct;
