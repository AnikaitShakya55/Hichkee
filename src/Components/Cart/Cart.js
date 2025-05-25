import React, { useContext, useState } from "react";
import CartContext from "../../Store/CartContext";
import Modal from "../../UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
  const ctx = useContext(CartContext);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const itemRemoveHandler = (id) => {
    ctx.removeItem(id);
  };

  const handleOrder = () => {
    setOrderPlaced(true);
  };

  return (
    <Modal cartCloseHandler={props.cartCloseHandler}>
      {!orderPlaced && (
        <>
          <div className={classes.scrollContainer}>
            <ul className={classes.cartList}>
              {ctx.items.map((meal) => (
                <li key={meal.id} className={classes.cartItem}>
                  <div className={classes.cardImageContainer}>
                    <img
                      src={meal.image}
                      alt={meal.name}
                      className={classes.cardImg}
                    />
                  </div>
                  <div className={classes.cardContent}>
                    <h2 className={classes.cardTitle}>{meal.name}</h2>
                    <p className={classes.cardParagraph}>
                      ${meal.price.toFixed(2)}
                    </p>
                    <p className={classes.cardParagraph}>
                      Quantity: {meal.quantity}
                    </p>
                    <div className={classes.cardButtons}>
                      <button
                        className={classes.btnDanger}
                        onClick={() => itemRemoveHandler(meal.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className={classes.total}>
            <h2 className={classes.totalAmount}>Total amount</h2>
            <span className={classes.amount}>${ctx.totalPrice.toFixed(2)}</span>
          </div>

          <div className={classes.order}>
            <button
              className={classes.btnDanger}
              onClick={props.cartCloseHandler}
            >
              Close
            </button>
            <button className={classes.btnSuccess} onClick={handleOrder}>
              Order
            </button>
          </div>
        </>
      )}

      {orderPlaced && (
        <>
          <p className={classes.orderPlacedMessage}>Order is placed!</p>
          <button
            className={classes.btnSuccess}
            onClick={() => {
              props.cartCloseHandler();
              setOrderPlaced(false);
            }}
          >
            Close
          </button>
        </>
      )}
    </Modal>
  );
};

export default Cart;
