import React, { useReducer } from 'react';
import CartContext from './CartContext';

const defaultCartState = { items: [], totalPrice: 0, totalQuantity: 0 };

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const updateTotalPrice = state.totalPrice + action.item.price * action.item.quantity;
    const updateTotalQuantity = state.totalQuantity + action.item.quantity;

    const existingItemIndex = state.items.findIndex(item => item.id === action.item.id);
    const existingItem = state.items[existingItemIndex];
    let updateItems;
    let updateItem;
    if (existingItem) {
      updateItem = { ...existingItem, quantity: existingItem.quantity + action.item.quantity };
      updateItems = [...state.items];
      updateItems[existingItemIndex] = updateItem;
    } else {
      const newItem = { ...action.item };
      updateItems = state.items.concat(newItem);
    }

    return { items: updateItems, totalQuantity: updateTotalQuantity, totalPrice: updateTotalPrice };
  }

  if (action.type === "REMOVE_ITEM") {
    const existingItemIndex = state.items.findIndex(item => item.id === action.id);
    const existingItem = state.items[existingItemIndex];

    if (!existingItem) {
      return state;
    }

    let updateItems;
    if (existingItem.quantity === 1) {
      updateItems = state.items.filter(item => item.id !== action.id);
    } else {
      const updateItem = { ...existingItem, quantity: existingItem.quantity - 1 };
      updateItems = [...state.items];
      updateItems[existingItemIndex] = updateItem;
    }

    const updateTotalPrice = state.totalPrice - existingItem.price;
    const updateTotalQuantity = state.totalQuantity - 1;

    return { items: updateItems, totalQuantity: updateTotalQuantity, totalPrice: updateTotalPrice };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState);

  const addCartItemHandler = (item) => {
    dispatchCart({ type: "ADD_ITEM", item: item });
  };

  const removeCartItemHandler = (id) => {
    dispatchCart({ type: "REMOVE_ITEM", id: id });
  };

  const value = {
    items: cartState.items,
    totalPrice: cartState.totalPrice,
    totalQuantity: cartState.totalQuantity,
    addItem: addCartItemHandler,
    removeItem: removeCartItemHandler
  };

  return (
    <CartContext.Provider value={value}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
