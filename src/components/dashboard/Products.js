import React, { useEffect, useState } from 'react';
import { SyncLoader } from 'react-spinners';
import axios from 'axios';

export const Products = () => {
  
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios.get('/Users')
      .then((res) => {
        setUsers(res.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <div className='container-fluid'>
        <div className='row my-3'>
          <div className='col-lg-12 col-sm-12'>
            <h1  className="p_head" style={{ color: "rgb(2, 2, 94)", fontWeight: "700" }}> Products List</h1>
          </div>
        </div>
        <div className='row px-0 py-3 user_row'>
          <div className='col'>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Picture</th>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Description</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {isLoading ? (
                <SyncLoader
                color="rgb(2, 2, 94)"
                margin={3}
                size={15}
              />
                ) : (
                  users.length === 0 ? (
                    <tr>
                      <td colSpan="6">No User</td>
                    </tr>
                  ) : (
                    users.map((data, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{data.name}</td>
                        <td>{data.email}</td>
                        <td>{data.number}</td>
                        <td>{data.city}</td>
                        <td>{data.date.slice(0, 19)}</td>
                      </tr>
                    ))
                  )
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
