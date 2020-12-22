import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { signout, isAuthenticated } from "../auth";
import { itemTotal } from "./cartHelpers";

const isActive = (history, path) => {
    if (history.location.pathname === path) {
        return { color: "#ff9900" };
    } else {
        return { color: "#ffffff" };
    }
};

const Footer = ({ history }) => (
   <div className="jumbotron-footer">
   <h5>هشدار:این سامانه بصورت آزمایشی می باشد و هیچ گونه خدمات رسمی و مالی ارایه نمی دهد. </h5>
    </div>
);

export default withRouter(Footer);
