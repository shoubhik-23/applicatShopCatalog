import React from "react";
const store = {
  cartItems: [],
  orderItems: [],
};

function CounterReducer(state = store, action) {
  if (action.type === "add") {
    let temp = [...state.cartItems];
    temp.push({
      name: action.data.data.name,
      id: action.data.data.id,
      image: action.data.data.image,
      price: action.data.data.price,
      brand: action.data.data.brand,
    });
    return {
      ...state,
      cartItems: temp,
    };
  }
  if (action.type === "checkout") {
    let temp = [...state.orderItems];
    let a = temp.concat(action.data);

    return { ...state, orderItems: a, cartItems: [] };
  }
  return state;
}

export default CounterReducer;
