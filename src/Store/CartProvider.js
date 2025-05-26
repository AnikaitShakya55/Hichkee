import React, { useEffect, useReducer } from "react";
import CartContext from "./CartContext";
import { useDispatch, useSelector } from "react-redux";
import { showSnackbar } from "../redux/snackbarSlice";

const BACKEND_PORT = "http://localhost:5000";

const defaultCartState = {
  items: [],
  totalPrice: 0,
  totalQuantity: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const updateTotalPrice =
      state.totalPrice + action.item.price * action.item.quantity;
    const updateTotalQuantity = state.totalQuantity + action.item.quantity;

    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingItem = state.items[existingItemIndex];

    let updateItems;
    if (existingItem) {
      const updateItem = {
        ...existingItem,
        quantity: existingItem.quantity + action.item.quantity,
      };
      updateItems = [...state.items];
      updateItems[existingItemIndex] = updateItem;
    } else {
      const newItem = { ...action.item };
      updateItems = state.items.concat(newItem);
    }

    return {
      items: updateItems,
      totalPrice: updateTotalPrice,
      totalQuantity: updateTotalQuantity,
    };
  }

  if (action.type === "REMOVE_ITEM") {
    const existingItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingItemIndex];

    if (!existingItem) {
      return state;
    }

    let updateItems;
    if (existingItem.quantity === 1) {
      updateItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updateItem = {
        ...existingItem,
        quantity: existingItem.quantity - 1,
      };
      updateItems = [...state.items];
      updateItems[existingItemIndex] = updateItem;
    }

    const updateTotalPrice = state.totalPrice - existingItem.price;
    const updateTotalQuantity = state.totalQuantity - 1;

    return {
      items: updateItems,
      totalPrice: updateTotalPrice,
      totalQuantity: updateTotalQuantity,
    };
  }

  if (action.type === "SET_CART") {
    return {
      items: action.cart.items || [],
      totalPrice: action.cart.totalPrice || 0,
      totalQuantity: action.cart.totalQuantity || 0,
    };
  }

  return defaultCartState;
};

const CartProvider = (props) => {
  const dispatch = useDispatch();
  const activeUser = useSelector((state) => state.activeUser.user);
  const token = localStorage.getItem("token");
  const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState);

  useEffect(() => {
    const BACKEND_PORT = `http://localhost:5000`;
    console.log("token", token);

    const fetchCart = async () => {
      try {
        const res = await fetch(`${BACKEND_PORT}/cart/getCartItems`, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        if (res.ok) {
          const responseData = await res.json();

          const cartData = responseData.data;
          console.log("cartData", cartData);

          dispatchCart({
            type: "SET_CART",
            cart: {
              items: cartData.items,
              totalPrice: cartData.totalPrice,
              totalQuantity: cartData.totalQuantity,
            },
          });
        }
      } catch (err) {
        console.error("Failed to fetch cart:", err);
      }
    };
    if (token) {
      fetchCart();
    }
  }, [token]);

  const syncCartWithBackend = async (cart) => {
    if (!activeUser || !token) return;

    try {
      const res = await fetch(`${BACKEND_PORT}/cart/addToCart`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          items: cart.items,
          totalPrice: cart.totalPrice,
          totalQuantity: cart.totalQuantity,
        }),
        // credentials: true,
      });
      const data = await res.json();
      console.log("data", data);
      dispatch(showSnackbar({ message: data.message, severity: "success" }));
    } catch (err) {
      console.error("Error syncing cart with backend:", err);
    }
  };

  const addCartItemHandler = (item) => {
    const newState = cartReducer(cartState, { type: "ADD_ITEM", item });
    dispatchCart({ type: "ADD_ITEM", item });
    syncCartWithBackend(newState);
    console.log(newState);
  };

  const removeCartItemHandler = (id) => {
    const newState = cartReducer(cartState, { type: "REMOVE_ITEM", id });
    dispatchCart({ type: "REMOVE_ITEM", id });
    syncCartWithBackend(newState);
  };

  const cartContextValue = {
    items: cartState.items,
    totalPrice: cartState.totalPrice,
    totalQuantity: cartState.totalQuantity,
    addItem: addCartItemHandler,
    removeItem: removeCartItemHandler,
  };

  return (
    <CartContext.Provider value={cartContextValue}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
