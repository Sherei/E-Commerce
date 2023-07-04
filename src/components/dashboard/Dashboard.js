import React, { useEffect, useState } from 'react';
import { FaUsers, FaPowerOff, FaSearch, FaClipboardList, FaFirstOrder, FaFirstOrderAlt } from "react-icons/fa";
import { MdProductionQuantityLimits } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import { Users } from "./Users"
import { AddProduct } from "./AddProduct"
import { Products } from "./Products"
import { NewOrder } from "./NewOrder"
import { Orders } from "./Orders"
import "./dashboard.css";

export const Dashboard = () => {

    let move = useNavigate()

    let data = [
        { title: "New Order", icon: <FaFirstOrderAlt />, id: "newOrder" },
        { title: "Total Users" , desc: "40", icon: <FaUsers />, id: "users" },
        { title: "Products", desc: "100", icon: <FaClipboardList />, id: "product" },
        { title: "Total Orders", desc: "43", icon: <FaFirstOrder />, id: "order" },
        { title: "Add Product", icon: <MdProductionQuantityLimits />, id: "addproduct" },
    ];
    const handleItemClick = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };



    return (
        <>
            <div className='container-fluid'>
                <div className='row mt-5 mb-2'>
                    <div className='col-lg-12 col-sm-12'>
                        <div className='search-div'>
                            <input
                                type="search"
                                placeholder='Search Anything'

                            />
                            <div className='search-icon'>
                                <FaSearch />
                            </div>
                            <div className='logout' onClick={() => {
                                move("/")
                            }}>
                                <FaPowerOff />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row pt-2 pb-5 px-3' style={{ backgroundColor: "rgb(2, 2, 94)", color: "white", borderRadius: "20px" }}>
                    <div className='col-lg-12 col-sm-12 py-4'>
                        <h1>Dashboard</h1>
                    </div>
                    {data.map((item) => {
                        return (
                            <div className='col-lg-4 col-sm-5 p-3' key={item.title} onClick={() => handleItemClick(item.id)}>
                                <div className='dash_card'>
                                    {item.title === "New Order" && (
                                        <div>
                                            <p className='color_card'>4+</p>
                                        </div>
                                    )}
                                    <div className='dash_icon' style={{ fontSize: "80px" }}>
                                        {item.icon}
                                    </div>
                                    <div className='dash_detail' style={{ fontSize: "30px" }}>
                                        <div>
                                            <p style={{ fontWeight: "600" }}>{item.title}</p>
                                        </div>
                                        <div className='d-flex justify-content-end px-3'>
                                            <p style={{ fontWeight: "600" }}>{item.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}

                </div>

                <div className='col-lg-12 col-sm-12' id='newOrder'>
                    <div className='row px-5 my-5 d-flex gap-5 justify-content-center'>
                        <NewOrder />
                    </div>
                </div>
                <div className='col-lg-12 col-sm-12' id='order'>
                    <div className='row px-5 my-5 d-flex gap-5 justify-content-center'>
                        <Orders />
                    </div>
                </div>

                <div className='col-lg-12 col-sm-12' id='users'>
                    <div className='row px-5 my-5 d-flex gap-5 justify-content-center'>
                        <Users />
                    </div>
                </div>

                <div className='col-lg-12 col-sm-12' id='product'>
                    <div className='row px-5 my-5 d-flex gap-5 justify-content-center'>
                        <Products />
                    </div>
                </div>

                <div className='col-lg-12 col-sm-12' id='addproduct'>
                    <div className='row px-5 my-5 d-flex gap-5 justify-content-center'>
                        <AddProduct />
                    </div>
                </div>

            </div>
        </>
    );
};
