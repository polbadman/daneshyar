import React from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import moment from 'jalali-moment'

const AdminDashboard = () => {
    const {
        user: { _id, name, email, role,createdAt }
    } = isAuthenticated();

    const adminLinks = () => {
        return (
            <div className="card">
                <h4 className="card-header">پنل مدیریت</h4>
                <ul className="list-group">
                    <li className="list-group-item">
                        <Link className="nav-link" to="/create/category">
                            ساخت گروه
                        </Link>
                    </li>
                    <li className="list-group-item">
                        <Link className="nav-link" to="/create/product">
                            ساخت محصول
                        </Link>
                    </li>
                    <li className="list-group-item">
                        <Link className="nav-link" to="/admin/users">
                            مدیریت کاربران
                        </Link>
                    </li>
                    <li className="list-group-item">
                        <Link className="nav-link" to="/admin/categorys">
                            مدیریت گروه ها
                        </Link>
                    </li>
                    <li className="list-group-item">
                        <Link className="nav-link" to="/admin/products">
                            مدیریت محصولات
                        </Link>
                    </li>
                    <li className="list-group-item">
                        <Link className="nav-link" to="/admin/orders">
                            مدیریت سفارشات
                        </Link>
                    </li>
                </ul>
            </div>
        );
    };

    const adminInfo = () => {
        return (
            <div className="card mb-5">
                <h3 className="card-header">اطلاعات کاربری</h3>
                <ul className="list-group">
                    <li className="list-group-item">نام: {name}</li>
                    <li className="list-group-item">رایانامه: {email}</li>
                    <li className="list-group-item">
                       سطح کاربری: {role === 1 ? "Admin" : "Registered User"}
                    </li>
                    <li className="list-group-item">شناسه کار بری: {_id}</li>
                    <li className="list-group-item">تاریخ عضویت: {createdAt}</li>
                    
                </ul>
            </div>
        );
    };

    return (
        <Layout
            title="پیشخوان"
            description={`وقت بخیر: ${name}!`}
            className="container-fluid"
        >
            <div className="row">
                <div className="col-3">{adminLinks()}</div>
                <div className="col-9">{adminInfo()}</div>
            </div>
        </Layout>
    );
};

export default AdminDashboard;
