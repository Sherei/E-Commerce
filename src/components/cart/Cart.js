import React, { useEffect, useState } from 'react';
import './cart.css';
import { GrFormSubtract } from 'react-icons/gr';
import { AiOutlinePlus } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';

export const Cart = () => {
  const [subtotal, setSubtotal] = useState(0);
  const [shippingFee, setShippingFee] = useState(0);
  const [total, setTotal] = useState(0);

  const [cart, setCart] = useState([
    {
      img: 'photo-1460353581641-37baddab0fa2.jpg',
      price: 1200,
      quantity: 1,
      shipping: 90
    },
    {
      img: 'photo-1618424181497-157f25b6ddd5.jpg',
      price: 1200,
      quantity: 1,
      shipping: 100
    },
  ]);

  const decreaseQuantity = (index) => {
    if (cart[index].quantity > 1) {
      const updatedCart = [...cart];
      updatedCart[index].quantity = cart[index].quantity - 1;
      setCart(updatedCart);
    }
  };

  const increaseQuantity = (index) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity = cart[index].quantity + 1;
    setCart(updatedCart);
  };

  const removeProduct = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
  };

  function ClearCart() {
    setCart([]);
  }

  useEffect(() => {
    let totalShippingFee = 0;
    cart.forEach((item) => {
      totalShippingFee += item.shipping;
    });
    setShippingFee(totalShippingFee);
  }, [cart]);

  useEffect(() => {
    let totalSubtotal = 0;
    cart.forEach((item) => {
      totalSubtotal += item.price * item.quantity;
    });
    setSubtotal(totalSubtotal);
  }, [cart]);

  useEffect(() => {
    setTotal(subtotal + shippingFee);
  }, [subtotal, shippingFee]);
  return (
    <div className="container-fluid">
      <table className="table cart-table table-borderless my-5">
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col">Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Subtotal</th>
            <th scope="col">Remove</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((data, index) => {
            console.log(data)
            return <>
              <tr>
                <td>
                  <img src={data.img} width={'70px'} alt="" />
                </td>
                <td>{data.price}</td>
                <td className="d-flex gap-3" style={{ fontSize: '18px', fontWeight: 'bold' }}>
                  <span onClick={() => decreaseQuantity(index)}>
                    <GrFormSubtract />
                  </span>
                  <span>{data.quantity}</span>
                  <span onClick={() => increaseQuantity(index)}>
                    <AiOutlinePlus />
                  </span>
                </td>
                <td>{data.price * data.quantity}</td>
                <td style={{ fontSize: '20px', color: '#C82333', cursor: 'pointer' }} onClick={() => removeProduct(index)}>
                  <MdDelete />
                </td>
              </tr>
            </>
          })}
        </tbody>
      </table>
      <hr />
      <div className="row">
        <div className="col-lg-12 d-flex justify-content-between">
          <button className="btn btn-primary ml-4 rounded-0 py-3 px-3">Continue Shopping</button>
          <button className="btn rounded-0 mr-4 btn-danger" onClick={ClearCart}>Clear Cart</button>
        </div>
        <div className="col-lg-12 cart-total">
          <div className='main'>
            <div>SubTotal <span>Rs,{subtotal}</span> </div>
            <div>Shiping Fee <span>Rs,{shippingFee}</span></div>
            <hr />
            <div>Total Bill <span>Rs,{total}</span></div>
          </div>
        </div>
        <div className="col-lg-12 d-flex justify-content-center">
          <button className="btn rounded-0 py-3 px-3 mb-5 btn-danger">Place Order</button>

        </div>
      </div>
    </div >
  )
}

