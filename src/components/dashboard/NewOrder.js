import React, { useEffect, useState } from 'react';
import { SyncLoader } from 'react-spinners';
import axios from 'axios';
export const NewOrder = () => {

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
            <h1 className="p_head" style={{ color: "rgb(2, 2, 94)", fontWeight: "700" }}>New Order</h1>
          </div>
        </div>
        <div className='row px-0 py-3 user_row'>
          <div className='col'>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th>SN</th>
                  <th>Picture</th>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Color</th>
                  <th>Address</th>
                  <th>Contact Number</th>
                  <th>Total Bill</th>

                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>12234</td>
                  <td>Picture</td>
                  <td>Samsung</td>
                  <td>Mobiles</td>
                  <td>Samsung</td>
                  <td>Lahore</td>
                  <td>03067208343</td>
                  <td>152000</td>
                  <td>03-jul-2023</td>
                  {/* <td>{data.date.slice(0, 19)}</td> */}
                </tr>
                <tr>
                  <td>12234</td>
                  <td>Picture</td>
                  <td>Samsung</td>
                  <td>Mobiles</td>
                  <td>Samsung</td>
                  <td>Faisalabad</td>
                  <td>03067208343</td>
                  <td>152000</td>
                  <td>03-jul-2023</td>
                  {/* <td>{data.date.slice(0, 19)}</td> */}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div >
    </>
  );
}
