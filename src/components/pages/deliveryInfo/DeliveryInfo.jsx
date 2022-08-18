import React from "react";
import "./DeliveryInfo.css";
import { Link } from "react-router-dom";
import { AiOutlineStar } from "react-icons/ai";
import { MdKeyboardBackspace } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
    addToCart,
    clearCart,
    decreaseCart,
    getTotals,
    removeFromCart,
} from "../../../features/cart/cartSlice";
import { useEffect, useState } from "react";
import axios from "axios";
// import { useHistory } from "react-router-dom";

export const DeliveryInfo = () => {
    const [deliveryAddress, setDeliveryAddress] = useState("");
    const [loadingPayBtn, setLoadingPayBtn] = useState(false);
    const [deliveryError, setDeliveryError] = useState(false);
    const [userObject, setUserObject] = useState({});

    const cart = useSelector((state) => state.cart);

    const auth = useSelector((state) => state.auth);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getTotals());
    }, [cart, dispatch]);

    const handleRemoveFromCart = (cartItem) => {
        dispatch(removeFromCart(cartItem));
    };

    const handleDecreaseCart = (cartItem) => {
        dispatch(decreaseCart(cartItem));
    };

    const handleIncreaseCart = (cartItem) => {
        dispatch(addToCart(cartItem));
    };

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    useEffect(() => {
        const current_user_email = JSON.parse(
            localStorage.getItem("afribook_user_email")
        );
        axios.get("https://afribook.herokuapp.com/users").then((result) => {
            const { users } = result.data;
            for (let user in users) {
                if (users[user].email === current_user_email) {
                    return setUserObject(users[user]);
                }
            }
        });
    });

    const payCartItems = async () => {
        console.log("Placing order...");
        const items = cart.cartItems;
        if (!deliveryAddress) {
            return setDeliveryError(true);
        }
        try {
            setLoadingPayBtn(true);
            setDeliveryError(false);
            // eslint-disable-next-line no-undef
            let handler = PaystackPop.setup({
                key: "pk_test_1753f1905d298420e63a09376a74b329bfb22343",
                email: userObject.email,
                amount: parseInt(cart.cartTotalAmount) * 100,
                onClose: function () {
                    console.info("Payment popup closed.");
                },
                callback: function (response) {
                    console.info("Payment successful", response);
                    handleClearCart();
                    for (let item in items) {
                        const order_data = {
                            book_id: items[item]._id,
                            quantity: items[item].cartQuantity,
                            price: items[item].price * items[item].cartQuantity,
                            user_id: userObject._id,
                            delivery_address: deliveryAddress,
                        };
                        axios
                            .post(
                                "https://afribook.herokuapp.com/user/orders",
                                order_data
                            )
                            .then((response) => {
                                console.log("Order placed", response);
                                setTimeout(() => {
                                    window.location.pathname = "/orders";
                                }, 2000);
                            })
                            .catch((error) => {
                                console.error(error);
                            });
                    }
                    setLoadingPayBtn(false);
                },
            });

            handler.openIframe();
        } catch (error) {
            console.error(error);
        } finally {
            setLoadingPayBtn(false);
        }
    };

    return (
        <div className="deliveryInfo">
            <div className="deliveryInfo-div-1">
                <div className="deliveryInfo-div-1-a">
                    <div className="deliveryInfo-afribook-div">
                        <h3>Afribook</h3>
                    </div>
                    <div className="deliveryInfo-checkout-div">
                        <h4 className="checkout">Checkout</h4>
                    </div>
                </div>
                <div className="deliveryInfo-div-1-b">
                    <div className="deliv-info-div">
                        <div className="tick-1">1</div>
                        <p>Delivery Info</p>
                    </div>

                    <span>
                        <hr className="deliveryInfo-line" />
                    </span>

                    <div className="pay-info-div">
                        <div className="tick-2">2</div>
                        <p>Payment Info</p>
                    </div>

                    <span>
                        <hr className="deliveryInfo-line" />
                    </span>

                    <div className="order-div">
                        <div className="tick-3">3</div>
                        <p>Order Status</p>
                    </div>
                </div>
            </div>

            <div className="deliveryInfo-div-2-cart">
                <div className="deliveryInfo-div-2-left-cart">
                    <div className="deliveryInfo-div-2-left-sub">
                        <div className="delivery-Info-h3">
                            <h3>Delivery Info</h3>
                            <p className="delivery-Info-para">
                                Continue your purchase by providing your
                                delivery address
                            </p>
                            {deliveryError && (
                                <p style={{ color: "red", marginTop: "10px" }}>
                                    Please enter a delivery address
                                </p>
                            )}
                            <textarea
                                style={{
                                    marginTop: "10px",
                                    width: "80%",
                                    height: "80%",
                                    padding: "5px",
                                }}
                                id="delivery-textarea"
                                name="delivery-textarea"
                                placeholder="Enter your delivery address"
                                value={deliveryAddress}
                                onChange={(e) =>
                                    setDeliveryAddress(e.target.value)
                                }
                            />
                            <br />
                            <button
                                onClick={payCartItems}
                                style={{
                                    cursor: "pointer",
                                    padding: "7px 10px",
                                    backgroundColor: "seagreen",
                                    color: "white",
                                    boxShadow: "none",
                                    border: "none",
                                }}
                                disabled={loadingPayBtn}
                            >
                                {loadingPayBtn ? "Loading" : "Pay Now"}
                            </button>
                        </div>
                    </div>
                </div>
                <div className="deliveryInfo-div-2-right-cart">
                    <div className="deliveryInfo-div-2-right-sub-cart">
                        <div className="deliveryInfo-div-2-right-sub-sub-cart">
                            <div className="order-summary-div-cart">
                                <div className="order-summary">
                                    Order Summary
                                </div>

                                {cart.cartItems.length === 0 ? (
                                    <div className="empty-cart-div">
                                        <p>Your cart is currently empty</p>
                                        <div className="start-shopping-div">
                                            <Link to="/home">
                                                <MdKeyboardBackspace />{" "}
                                                <span>Start Shopping</span>
                                            </Link>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="cart-items">
                                        {cart.cartItems?.map((cartItem) => (
                                            <div
                                                className="cart-item"
                                                key={cartItem.id}
                                            >
                                                <div className="single-order-div-cart">
                                                    <div className="single-order-image-div">
                                                        <img
                                                            className="single-order-image"
                                                            src={cartItem.cover}
                                                            alt=""
                                                        />
                                                    </div>
                                                    <div className="single-order-title-div-cart">
                                                        <h4>
                                                            {cartItem.title}
                                                        </h4>
                                                        <p>{cartItem.author}</p>
                                                        <div className="deliv-rating">
                                                            <AiOutlineStar />
                                                            <AiOutlineStar />
                                                            <AiOutlineStar />
                                                            <AiOutlineStar />
                                                        </div>
                                                        <p>
                                                            &#8358;
                                                            {cartItem.price.toLocaleString()}
                                                        </p>
                                                        <button
                                                            className="remove-btn-cart"
                                                            onClick={() =>
                                                                handleRemoveFromCart(
                                                                    cartItem
                                                                )
                                                            }
                                                        >
                                                            Remove
                                                        </button>
                                                    </div>
                                                    <div className="single-order-count-div-cart">
                                                        <div className="single-order-count-div-sub">
                                                            <button
                                                                className="add-btn"
                                                                onClick={() =>
                                                                    handleIncreaseCart(
                                                                        cartItem
                                                                    )
                                                                }
                                                            >
                                                                +
                                                            </button>
                                                            <p className="qty">
                                                                {
                                                                    cartItem.cartQuantity
                                                                }
                                                            </p>
                                                            <button
                                                                className="minus-btn"
                                                                onClick={() =>
                                                                    handleDecreaseCart(
                                                                        cartItem
                                                                    )
                                                                }
                                                            >
                                                                -
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="sub-total-div-cart">
                                                        <h5 className="sub-total-h5">
                                                            Sub total
                                                        </h5>
                                                        <div className="sub-total">
                                                            &#8358;
                                                            {(
                                                                cartItem.price *
                                                                cartItem.cartQuantity
                                                            ).toLocaleString()}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                        <div className="total-div">
                                            <h4>Total</h4>
                                            <h4>
                                                &#8358;
                                                {cart.cartTotalAmount.toLocaleString()}
                                            </h4>
                                        </div>

                                        <button
                                            className="clear-cart-btn"
                                            onClick={() => handleClearCart()}
                                        >
                                            Clear cart
                                        </button>
                                        <div>
                                            <Link to="/home">
                                                {" "}
                                                Continue shopping
                                            </Link>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
