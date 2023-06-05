import React, { useState } from 'react';
import {
  FaUserAlt,
  FaDiscourse,
  FaServicestack,
  FaCameraRetro,
  FaEnvelope,
  FaPowerOff,
  FaSearch,
  FaUsers
} from 'react-icons/fa';
import { Users } from './Users';
import './dashboard.css';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';

export const Dashboard = () => {
  const [activeComponent, setActiveComponent] = useState('users');
  let cu = useSelector(store => store.userSection.cu)
  let move = useNavigate()
  let dispatch = useDispatch()
  const handleClick = (component) => {
    setActiveComponent(component);
  };
  function Logout() {
    dispatch({
      type: 'LOGOUT_USER'
    });
    toast.success("Logout")
    move('/login');
  }
  const renderComponent = () => {
    switch (activeComponent) {
      case 'users':
        return <Users />;
      
      default:
        return null;
    }
  };

  return (
    <>
      <div className="container-fluid mb-4">
       
        <div className='row dash_topbar mb-4 '>
          <div className='col-lg-6 col-md-6 col-sm-6'>
            <input type="Search" placeholder='Search AnyThing' /> <span className='search'><FaSearch /></span>
          </div>

          <div className='col-lg-6 col-md-6 col-sm-6 d-flex topbar_detail'>
            <div>
             <b>Admin:</b> {cu.name}
            </div>
            <div className='topbar_img_box'>
              <img src={cu.pic} alt="" />
            </div>
            <div className='topbar_icon' onClick={Logout}>
              <FaPowerOff />
            </div>
          </div>
        </div>
        <div className="row dash_cont mb-4">
          <div className="col-lg-12 col-sm-12 mb-4">
            <h1 className="dash_heading">Dashboard</h1>
          </div>
          <div className="row card_Row">
            <div
              className="col-lg-3 col-md-5 col-sm-12 mb-4 dash_card"
              onClick={() => handleClick('users')}
            >
              <div className='dash_card_box'>
                <div className="dash_card_icon">
                  <FaUserAlt />
                </div>
                <div>
                  <p>Total Users</p>
                  <p>150</p>
                </div>
              </div>
            </div>

      
            
            <div
              className="col-lg-3 col-md-5 col-sm-12 mb-4 dash_card"
              onClick={() => handleClick('courses')}
            >
              <div className='dash_card_box'>
                <div className="dash_card_icon">
                  <FaDiscourse />
                </div>
                <div>
                  <p>Products</p>
                  <p>50</p>
                </div>
              </div>
            </div>
      


          </div>
        </div>
   
        <div className="row">
          <div className="col-lg-12 col-sm-12">{renderComponent()}</div>
        </div>
      </div >

    </>
  );
};
