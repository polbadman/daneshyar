import React from "react";
import Menu from "./Menu";
import Footer from "./Footer";
import "../styles.css";


const Layout = ({
    title = "Title",
    description = "Description",
    className,
    children
}) => (
    <div>
        <Menu />
        <div className="jumbotron">
            <div id="logo">
                <img src="../assets/logo.png" id="logo" />
            </div>
            <div id="titleCaption">
                <h2>{title}</h2>
                <p className="lead">{description}</p>
            </div>
        </div>
        <div className={className}>{children}</div>
        <Footer />
    </div>
);

export default Layout;
