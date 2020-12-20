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
   <h5>تمام حقوق برای  سامانه جامع  دانشیار محفوظ است. </h5>
    </div>
);

export default withRouter(Footer);
