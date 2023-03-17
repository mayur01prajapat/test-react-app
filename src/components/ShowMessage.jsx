import React from "react";
import { useSelector } from "react-redux";

export default function ShowMessage() {
  const state = useSelector((state) => state);
  return (
    <>
      <h2 className="message">Number of items in Cart: {state.numOfItems}</h2>
    </>
  );
}
