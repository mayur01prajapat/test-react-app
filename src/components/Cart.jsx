import React from "react";
import { useDispatch } from "react-redux";
import { addItem, deleteItem } from "../actions/cartAction";

const Cart = () => {
  const dispatch = useDispatch();
  return (
    <div className="cart">
      <button
        className="golden"
        onClick={() => {
          dispatch(addItem());
        }}
      >
        Add Item to Cart
      </button>
      <button
        className="red"
        onClick={() => {
          dispatch(deleteItem());
        }}
      >
        Remove Item from Cart
      </button>
    </div>
  );
};

export default Cart;
