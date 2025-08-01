import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";

const Cart = () => {
  const {
    cartItems,
    food_list,
    removeFromCart,
    getTotalCartAmount,
    getTotalQuantity,
    deliveryFee,
  } = useContext(StoreContext);

  const subtotal = getTotalCartAmount(); 
  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className="cart-items px-5">
        <div className="cart-items-title cart-heading">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {getTotalQuantity === 0 ? (
          <p className="NoItems">No Items in cart</p>
        ) : (
          food_list.map((item, index) => {
            if (cartItems[item._id] > 0) {
              return (
                <React.Fragment key={item._id}>
                  <div className="cart-items-title cart-items-item">
                    <img src={item.image} alt={item.name} />
                    <p>{item.name}</p>
                    <p>₹{item.price}</p>
                    <p>{cartItems[item._id]}</p>
                    <p>₹{item.price * cartItems[item._id]}</p>
                    <p
                      className="Remove"
                      onClick={() => removeFromCart(item._id)}
                    >
                      <img src={assets.remove_icon_cross} alt="Remove item" />
                    </p>
                  </div>
                  <hr key={`hr-${item._id}-${index}`} />
                </React.Fragment>
              );
            }
            return null;
          })
        )}
      </div>

      <div className="cart-bottom px-5">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>₹{subtotal}</p> 
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>₹{subtotal === 0 ? 0 : deliveryFee}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>₹{subtotal === 0 ? 0 : subtotal + deliveryFee}</b>
            </div>
          </div>
          <button
            disabled={subtotal === 0}
            onClick={() => navigate("/order")}
          >
            PROCEED TO CHECKOUT
          </button>
        </div>

        <div className="cart-promocode">
          <div>
            <p>If you have a promocode, Enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="Promo Code" />
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
