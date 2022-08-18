import React, { useState } from "react";
import { Header } from "../../layout/header/Header";
import "./Genre.css";
import { Footer } from "../../layout/footer/Footer";
import axios from "axios";

export const Genre = () => {
    const [message, setMessage] = useState("");
    const [genre, setGenre] = useState("");

    const unavailbleGenre = () => {
        setMessage("Sorry, this Genre is not available");
        setGenre("");
        setTimeout(() => {
            setMessage("");
        }, 2000);
    };

    const availableGenre = async (genre) => {
        window.location.href = "/genre-search";
    };

    return (
        <div className="genre">
            <Header />

            <div className="genre-div" style={{ marginTop: "20vh" }}>
                <div className="genre-div-1">
                    <h3>Genre</h3>
                    {message && <p>{message}</p>}
                    {genre && (
                        <p
                            style={{ cursor: "pointer" }}
                            onClick={availableGenre}
                        >
                            Go to {genre}
                        </p>
                    )}
                </div>

                <div className="genre-div-2">
                    <div className="genre-div-2-a">
                        <div className="genre-outside-div-1">
                            <div
                                className="genre-inside-div-1"
                                onClick={(e) => setGenre(e.target.textContent)}
                            >
                                Love
                            </div>
                        </div>
                        <div className="genre-outside-div-2">
                            <div
                                className="genre-inside-div-2"
                                onClick={(e) => setGenre(e.target.textContent)}
                            >
                                Fiction
                            </div>
                        </div>
                        <div className="genre-outside-div-3">
                            <div
                                className="genre-inside-div-3"
                                onClick={(e) => setGenre(e.target.textContent)}
                            >
                                Drama
                            </div>
                        </div>
                        <div className="genre-outside-div-4">
                            <div
                                className="genre-inside-div-4"
                                onClick={(e) => setGenre(e.target.textContent)}
                            >
                                History
                            </div>
                        </div>
                        <div className="genre-outside-div-5">
                            <div
                                className="genre-inside-div-5"
                                onClick={(e) => setGenre(e.target.textContent)}
                            >
                                Fantasy
                            </div>
                        </div>
                    </div>

                    <div className="genre-div-2-b">
                        <div className="genre-outside-div-6">
                            <div
                                className="genre-inside-div-6"
                                onClick={unavailbleGenre}
                            >
                                Art
                            </div>
                        </div>
                        <div className="genre-outside-div-7">
                            <div
                                className="genre-inside-div-7"
                                onClick={unavailbleGenre}
                            >
                                Science
                            </div>
                        </div>
                        <div className="genre-outside-div-8">
                            <div
                                className="genre-inside-div-8"
                                onClick={unavailbleGenre}
                            >
                                Thriller
                            </div>
                        </div>
                        <div className="genre-outside-div-9">
                            <div
                                className="genre-inside-div-9"
                                onClick={unavailbleGenre}
                            >
                                Mystery
                            </div>
                        </div>
                        <div className="genre-outside-div-10">
                            <div
                                className="genre-inside-div-10"
                                onClick={unavailbleGenre}
                            >
                                Dark
                            </div>
                        </div>
                    </div>

                    <div className="genre-div-2-c">
                        <div className="genre-outside-div-11">
                            <div
                                className="genre-inside-div-11"
                                onClick={unavailbleGenre}
                            >
                                Classic
                            </div>
                        </div>
                        <div className="genre-outside-div-12">
                            <div
                                className="genre-inside-div-12"
                                onClick={unavailbleGenre}
                            >
                                Romance
                            </div>
                        </div>
                        <div className="genre-outside-div-13">
                            <div
                                className="genre-inside-div-13"
                                onClick={unavailbleGenre}
                            >
                                Adventure
                            </div>
                        </div>
                        <div className="genre-outside-div-14">
                            <div
                                className="genre-inside-div-14"
                                onClick={unavailbleGenre}
                            >
                                Drama
                            </div>
                        </div>
                        <div className="genre-outside-div-15">
                            <div
                                className="genre-inside-div-15"
                                onClick={unavailbleGenre}
                            >
                                Folktale
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};
