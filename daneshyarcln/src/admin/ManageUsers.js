import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { getUsers, deleteUser } from "./apiAdmin";

const ManageUsers = () => {
    const [products, setProducts] = useState([]);

    const { user, token } = isAuthenticated();

    const loadProducts = () => {
        getUsers(user._id, token).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setProducts(data);
            }
        });
    };
    const goBackBTN = () => {
        return (
            <div className="mt-5">
                <Link to="/admin/dashboard" className="text-info">
                    برگشت به پیشخوان
                </Link>
            </div>
        );
    };
    const destroy = productId => {
        deleteUser(productId, user._id, token).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                loadProducts();
            }
        });
    };

    useEffect(() => {
        loadProducts();
    }, []);

    return (
        <Layout
            title="مدیریت کار بران"
            description="اامکان ایجاد حذف ویرایش کاربران"
            className="container-fluid"
        >
            <div className="row">
                <div className="col-12">
                    <h2 className="text-center">
                         تعداد:{products.length} کاربر
                    </h2>
                    <hr />
                    <ul className="list-group">
                        {products.map((p, i) => (
                            <li
                                key={i}
                                className="list-group-item d-flex justify-content-between align-items-center"
                            >
                                <Link to={`/profiles/${p._id}`}>
                                    <span className="badge badge-warning badge-pill">
                                        ویرایش
                                    </span>
                                </Link>
                                <strong>{p.name}</strong>
                                <span
                                    onClick={() => destroy(p._id)}
                                    className="badge badge-danger badge-pill"
                                >
                                    حذف
                                </span>
                            </li>
                        ))}
                    </ul>
                    <br />
                    {goBackBTN()}
                </div>
            </div>
        </Layout>
    );
};

export default ManageUsers;
