import React, { useState, useEffect } from "react";
import Layout from "../core/Layout";
import { isAuthenticated } from "../auth";
import { Link } from "react-router-dom";
import { getProducts, deleteProduct } from "./apiAdmin";
import { getCategories ,deleteCategory } from "./apiAdmin";

const ManageProducts = () => {
    const [products, setProducts] = useState([]);

    const { user, token } = isAuthenticated();

    const loadProducts = () => {
        getCategories().then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                setProducts(data);
            }
        });
    };

    const destroy = productId => {
        deleteCategory(productId, user._id, token).then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                loadProducts();
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

    useEffect(() => {
        loadProducts();
    }, []);

    return (
        <Layout
            title="مدیریت گروه ها"
            description="انجام چهار عمل اصلی بروی فهرست گروه ها"
            className="container-fluid"
        >
            <div className="row">
                <div className="col-12">
                    <h2 className="text-center">
                        کلآ {products.length} گروه
                    </h2>
                    <hr />
                    <ul className="list-group">
                        {products.map((p, i) => (
                            <li
                                key={i}
                                className="list-group-item d-flex justify-content-between align-items-center"
                            >
                                <Link to={`/admin/category/update/${p._id}`}>
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

export default ManageProducts;
