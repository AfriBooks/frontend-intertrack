import React, { useState } from "react";
import { Header } from "../../layout/header/Header";
import "./BookDetails.css";
import { AiOutlineStar } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import { RiThumbUpLine } from "react-icons/ri";
import { Footer } from "../../layout/footer/Footer";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../features/cart/cartSlice";
import { useHistory } from "react-router-dom";
import axios from "axios";
import {
    single,
    singleProductFetch,
} from "../../../features/product/singleProductSlice";
import { useEffect } from "react";

//books/:id/reviews

export const BookDetails = () => {
    const { singleItem } = useSelector((state) => state.singleProduct);

    const [deliveryAddress, setDeliveryAddress] = useState("");

    const [radio, setRadio] = useState("");

    const [reviews, setReviews] = useState([]);
    const [reviewsData, setReviewsData] = useState([]);

    const [bookPrice, setBookPrice] = useState(0);

    const [userObject, setUserObject] = useState({});

    const [newReview, setNewReview] = useState("");

    const [reviewError, setReviewError] = useState("");
    const [postReviewLoading, setPostReviewLoading] = useState(false);

    const [buyNowClick, setBuyNowClick] = useState(false);
    const [byNowLoading, setBuyNowLoading] = useState(false);

    const dispatch = useDispatch();
    const history = useHistory();

    const handleAddToCart = (singleProduct) => {
        if (!radio) {
            return alert("Please select Paperback or Ebook");
        }
        dispatch(addToCart(singleProduct));
        history.push("/delivery-info");
    };

    const { id } = useParams();

    useEffect(() => {
        const fetchProductDetails = async () => {
            await axios
                .get(`https://afribook.herokuapp.com/books/${id}`)
                .then((response) => {
                    dispatch(single(response.data));
                })

                .catch((err) => {
                    console.log("error ", err);
                });
        };

        fetchProductDetails();
    }, [dispatch, id]);

    useEffect(() => {
        const fetchProductReviews = async () => {
            await axios
                .get(`https://afribook.herokuapp.com/books/${id}/reviews`)
                .then((response) => {
                    if (!response.data) {
                        return setReviewsData(["", ""]);
                    }
                    setReviews(response);
                    setReviewsData(response.data);
                })

                .catch((err) => {
                    console.log("error ", err);
                });
        };
        fetchProductReviews();
    }, [id]);

    const getReviews = () => {
        if (reviews && reviews.length > 0) {
            return reviewsData.map((rev) => {
                return (
                    <div key={rev._id}>
                        <div style={{ margin: "7px 0", padding: "1px" }}>
                            <p
                                style={{
                                    color: "lightgreen",
                                    fontSize: "smaller",
                                }}
                            >
                                <em>{rev.user.username}</em>
                            </p>
                            <h5 style={{ marginTop: "2px 0 !important" }}>
                                {rev.review}
                            </h5>
                        </div>
                        <hr style={{ width: "10%" }} />
                    </div>
                );
            });
        }
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

    const buyNowActivate = () => {
        if (!radio) {
            return alert("Please select Paperback or Ebook");
        }
        setBuyNowClick(true);
    };

    const buyNow = () => {
        try {
            if (!radio) {
                return alert("Please select Paperback or Ebook");
            }
            setBuyNowLoading(true);
            // eslint-disable-next-line no-undef
            let handler = PaystackPop.setup({
                key: "pk_test_1753f1905d298420e63a09376a74b329bfb22343",
                email: userObject.email,
                amount: parseInt(bookPrice) * 100,
                onClose: function () {
                    console.info("Payment popup closed.");
                },
                callback: function (response) {
                    const order_data = {
                        book_id: id,
                        quantity: 1,
                        price: bookPrice,
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
                    setBuyNowLoading(false);
                },
            });

            handler.openIframe();
        } catch (error) {
            console.log(error);
        } finally {
            setBuyNowLoading(false);
        }
    };

    const postNewReview = async (e) => {
        e.preventDefault();

        if (!newReview) {
            return setReviewError("Please type in a review");
        }

        if (newReview) {
            setPostReviewLoading(true);
            setReviewError("");
            let new_review = { review: newReview };
            await axios
                .patch(
                    `https://afribook.herokuapp.com/books/${id}/reviews`,
                    JSON.stringify(new_review)
                )
                .then((response) => {
                    setPostReviewLoading(false);
                    alert("Review posted");
                    console.info(response);
                })
                .catch((error) => console.error(error));
        }
    };

    return (
        <div className="bookDetails">
            <Header />

            <div className="bookDetails-div-1">
                <div className="bookDetails-div-left">
                    <div className="bookDetails-div-left-subdiv">
                        <div className="bookDetails-div-left-subdiv-image-div">
                            <img
                                className="subdiv-image-div-image"
                                src={singleItem.cover}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
                <div className="bookDetails-div-right">
                    <div className="title-book-div">
                        <h3 className="title-book">{singleItem.title}</h3>
                        <p className="author-name">{singleItem.author}</p>
                        <p className="paper-book">
                            <strong>
                                Paperback: &#8358;{singleItem.price}
                            </strong>
                        </p>
                        <p className="e-book">
                            <strong>
                                Ebook: &#8358;{" "}
                                <span id="e-book-price"> 1500 </span>
                            </strong>
                        </p>
                        <div className="rating-div">
                            <AiOutlineStar />
                            <AiOutlineStar />
                            <AiOutlineStar />
                            <AiOutlineStar />
                        </div>

                        <div className="radio-btn-div">
                            <p className="choose-format-para">
                                Choose prefered format
                            </p>
                            <div className="radio-btn-div-sub">
                                <input
                                    type="radio"
                                    id="paper-back"
                                    name="book-type"
                                    value="paper-back"
                                    onChange={(e) => {
                                        setRadio(e.target.value);
                                        setBookPrice(singleItem.price);
                                    }}
                                />
                                  <label htmlFor="paper-back">Paperback</label>
                                 
                                <input
                                    className="e-book-radio"
                                    type="radio"
                                    id="e-book"
                                    name="book-type"
                                    value="e-book"
                                    onChange={(e) => {
                                        setRadio(e.target.value);
                                        const price =
                                            document.getElementById(
                                                "e-book-price"
                                            );
                                        setBookPrice(price.textContent);
                                    }}
                                />
                                  <label htmlFor="e-book">Ebook</label>
                            </div>
                        </div>

                        <div className="buy-now-div">
                            {buyNowClick && (
                                <input
                                    placeholder="Enter delivery address"
                                    type="text"
                                    style={{
                                        fontSize: "smaller",
                                        padding: "1px 3px",
                                    }}
                                    value={deliveryAddress}
                                    onChange={(e) =>
                                        setDeliveryAddress(e.target.value)
                                    }
                                />
                            )}
                            {!deliveryAddress ? (
                                <button
                                    className="buy-now-btn-2"
                                    onClick={buyNowActivate}
                                    style={{ cursor: "pointer" }}
                                >
                                    Buy now
                                </button>
                            ) : (
                                <button
                                    className="buy-now-btn"
                                    onClick={buyNow}
                                    style={{ cursor: "pointer" }}
                                    disabled={byNowLoading}
                                >
                                    {byNowLoading ? "Loading..." : "Pay now"}
                                </button>
                            )}
                            <button
                                className="add-to-cart-btn"
                                onClick={() => handleAddToCart(singleItem)}
                            >
                                Add to cart
                            </button>
                        </div>
                    </div>
                    <div className="book-summary-div">
                        <h4 className="summary-h4">Book Summary</h4>
                        <p className="summary-para">
                            {singleItem.description} <br />
                            <span className="see-more">See more...</span>{" "}
                        </p>
                    </div>
                    <div
                        className="book-desc-div"
                        style={{ marginBottom: "20px" }}
                    >
                        <h4 className="desc-h4">Book description</h4>
                        <p className="desc-para">Format: Paperback Ebook</p>
                        <p className="desc-para">ISBN: 12345678901112</p>
                        <p className="desc-para">Pages: 580</p>
                        <p className="desc-para">Reading time: 2hours</p>
                        <p className="desc-para">Dimension: 134 x 158nm</p>
                        <p className="desc-para">Published: 2021</p>
                        <p className="desc-para">
                            Tags: Romance Fiction Historical
                        </p>
                    </div>
                </div>
            </div>
            <div className="bookDetails-div-2">
                <div className="bookDetails-div-2-left"></div>
                <div className="bookDetails-div-2-right">
                    <div>
                        <h4>Reviews</h4>
                        <p>
                            <small>
                                <em>
                                    See what people think about{" "}
                                    {singleItem.title}
                                </em>
                            </small>
                        </p>
                        <hr style={{ width: "30%" }} />
                        <div className="mt-5 pt-5 mb-5">
                            {reviews.length > 0 && getReviews()}
                            {reviews.length <= 0 && (
                                <p>This book has no reviews yet</p>
                            )}
                        </div>
                        <div style={{ marginTop: "15px" }}>
                            <label htmlFor="textarea">
                                Tell us what you think
                            </label>
                            <br />
                            <form>
                                {reviewError && (
                                    <p style={{ color: "red" }}>
                                        {reviewError}
                                    </p>
                                )}
                                <textarea
                                    style={{ width: "80%", padding: "5px" }}
                                    id="textarea"
                                    name="coment"
                                    placeholder="Enter your review"
                                    value={newReview}
                                    onChange={(e) =>
                                        setNewReview(e.target.value)
                                    }
                                    required
                                />
                                <br />
                                <button
                                    type="submit"
                                    className="post-btn"
                                    style={{ cursor: "pointer" }}
                                    onClick={postNewReview}
                                    disabled={postReviewLoading}
                                >
                                    {postReviewLoading ? "Posting..." : "Post"}
                                </button>
                            </form>
                        </div>

                        {/* <p>Showing 1 - 5 of 24 reviews</p> */}
                    </div>
                </div>
            </div>
            <div className="bookDetails-div-3">
                <div className="bookDetails-div-3-a">
                    <h3>You may also like</h3>
                    <div className="viewall-div">
                        <p>View all</p>
                        <div>
                            <MdKeyboardArrowRight />
                        </div>
                    </div>
                </div>
                <div className="bookDetails-div-3-b"></div>
            </div>

            <Footer />
        </div>
    );
};
