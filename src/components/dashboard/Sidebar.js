import React, { useState } from 'react';
import {
  FaBars,
  FaClipboardList,
  FaFirstOrder,
  FaFirstOrderAlt,
  FaHome,
  FaQuinscape,
  FaProductHunt,
  FaPhoneAlt,
  FaPowerOff
} from 'react-icons/fa';

import { MdProductionQuantityLimits,MdSpaceDashboard } from "react-icons/md";
import { Dashboard } from "./Dashboard";
import { AddProduct } from "./AddProduct"
import { Products } from "./Products"
import "./sidebar.css"
import { useNavigate } from 'react-router';

const Sidebar = () => {

  let Components = [
    {title: "Dashboard", icon: <MdSpaceDashboard />, key: 'dashboard'}, 
    {title: "Products", icon: <FaClipboardList />, key: 'list'}, 
    {title: "Add Product", icon: <MdProductionQuantityLimits />, key: 'add'}, 
    {title: "New Order", icon: <FaFirstOrderAlt />, key: 'order'}, 
    {title: "Orders", icon: <FaFirstOrder />, key: 'orders'}
  ];

  let Links = [
    {title: "Home", icon: <FaHome/>, key: 'home', path: '/'}, 
    {title: "About", icon: <FaQuinscape/>, key: 'about', path: '/about'}, 
    {title: "Product", icon: <FaProductHunt/>, key: 'product', path: '/product'}, 
    {title: "Contact", icon: <FaPhoneAlt/>, key: 'contact', path: '/contact'}, 
    {title: "Logout", icon: <FaPowerOff/>, key: 'logout', path: '/login'},
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [activeComponent, setActiveComponent] = useState('dashboard');

  const toggle = () => setIsOpen(!isOpen);
  const handleMenuClick = (component) => {
    setActiveComponent(component);
  };
let move=useNavigate()
  const handleLinkClick = (path) => {
    move(path)
    console.log("Navigating to:", path);
  };

  return (
    <div className="container-fluid sidebarinfo">
      <div style={{ width: isOpen ? '300px' : '50px' }} className="sidebar">
        <div className="top_section py-5">
          <h1 style={{ display: isOpen ? 'block' : 'none' }} className="logo">
            Buy Right
          </h1>
          <div style={{ marginLeft: isOpen ? '50px' : '0px' }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        <div style={{ display: isOpen ? 'block' : 'none', color: "rgb(255, 255, 255)" }} className="link_text mb-4 px-2">
          Components
        </div>
        {Components.map((data) => (
          <div
            className={`link ${activeComponent === data.key ? 'active' : ''}`}
            onClick={() => handleMenuClick(data.key)}
            key={data.key}
          >
            <div className="icon">
              {data.icon}
            </div>
            <div style={{ display: isOpen ? 'block' : 'none' }} className="link_text">
              {data.title}
            </div>
          </div>
        ))}
        <div style={{ display: isOpen ? 'block' : 'none', color: "rgb(255, 255, 255)" }} className="link_text my-4 px-2">
          Extra Links
        </div>
        {Links.map((data) => (
          <div
            className={`link ${activeComponent === data.key ? 'active' : ''}`}
            onClick={() => handleLinkClick(data.path)}
            key={data.key}
          >
            <div className="icon">
              {data.icon}
            </div>
            <div style={{ display: isOpen ? 'block' : 'none' }} className="link_text">
              {data.title}
            </div>
          </div>
        ))}
      </div>
      <div className="dashboard">
        {activeComponent === 'dashboard' && <Dashboard />}
        {activeComponent === 'add' && <AddProduct />}
        {activeComponent === 'list' && <Products />}
      </div>
    </div>
  );
};

export default Sidebar;
