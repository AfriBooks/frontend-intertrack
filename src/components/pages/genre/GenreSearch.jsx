import React from "react";
import { Header } from "../../layout/header/Header";
import "./Genre.css";
import { Footer } from "../../layout/footer/Footer";

export const GenreSearch = () => {
    return (
        <div className="genre">
            <Header />

            <div className="genre-div" style={{ margin: "20vh 0 30vh 0" }}>
                <div className="genre-div-1">
                    <div>
                        <h3>Fetching Genre</h3>
                        <p>Please wait...</p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};
