import axios from "axios";
import { useState, useEffect } from "react";
import { Header } from "../../layout/header/Header";
import "./orders.css";

export const Orders = () => {
    const [books, setBooks] = useState([]);
    const [orders, setOrders] = useState([]);
    const [message, setMessage] = useState("");
    const [userObject, setUserObject] = useState({});

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

    useEffect(() => {
        const id = userObject._id;
        axios
            .get(
                `https://afribook.herokuapp.com/users/${id}/orders`
            )
            .then((response) => {
                if (!response.data) {
                    setMessage("You have no orders");
                    return setOrders(["", ""]);
                }
                setOrders(response.data);
            })
            .catch((error) => console.error(error));
    });
    useEffect(() => {
        axios
            .get(`https://afribook.herokuapp.com/books`)
            .then((response) => {
                const { data } = response;
                var secondKey = Object.keys(data)[1];
                setBooks(data[secondKey]);
            })
            .catch((error) => console.error(error));
    });

    const renderOrders = () => {
        if (orders && orders.length > 0) {
            return orders.map((order) => {
                let book_name = "";
                for (let book in books) {
                    if (books[book]._id === order.book_id) {
                        book_name += books[book].title;
                    }
                }
                return (
                    <tr key={order._id}>
                        <td>{book_name}</td>
                        <td>{order.createdAt.substring(0, 10)}</td>
                        <td>&#8358;{order.price.toLocaleString()}</td>
                        <td>{order.quantity}</td>
                        <td className="pill">{order.status}</td>
                    </tr>
                );
            });
        }
    };

    return (
        <>
            <Header />
            <main style={{ marginTop: "15vh", padding: "0 10%" }}>
                <h4 className="my-orders">My Orders</h4>

                {message ? (
                    { message }
                ) : (
                    <div style={{ overflowX: "auto", marginTop: "20px" }}>
                        <table>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Date</th>
                                    <th>Price</th>
                                    <th>No. of Books</th>
                                    <th>Order status</th>
                                </tr>
                            </thead>
                            <tbody>{renderOrders()}</tbody>
                        </table>
                    </div>
                )}
            </main>
        </>
    );
};
