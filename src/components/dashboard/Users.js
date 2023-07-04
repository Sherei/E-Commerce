import React from 'react';
import "./users.css";

export const Users = () => {

 
  return (
    <>
      <div className='container-fluid'>
        <div className='row my-3'>
          <div className='col-lg-12 col-sm-12'>
            <h1 className='p_head'  style={{ color: "rgb(2, 2, 94)", fontWeight: "700" }}> Users List </h1>
          </div>
        </div>
        <div className='row px-0 py-3 user_row'>
          <div className='col'>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Sr #</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone No</th>
                  <th>City</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                    <tr>
                      <td colSpan="6">No User</td>
                    </tr>
                      <tr>
                        {/* <td>{index + 1}</td>
                        <td>{data.name}</td>
                        <td>{data.email}</td>
                        <td>{data.number}</td>
                        <td>{data.city}</td>
                        <td>{data.date.slice(0, 19)}</td> */}
                      </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
