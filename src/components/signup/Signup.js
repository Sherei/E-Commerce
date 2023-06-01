import React from 'react'
import "./signup.css"
import { useNavigate } from 'react-router'
export const Signup = () => {

  let move = useNavigate()

  return (

    <div className='container'>
      <div className="row my-5 signup">
        <div className="col-lg-7 signup-left">
          <div className="signup-form">
            <h1>BuyRight</h1>
            <p>Welcome to BuyRight !!!</p>
            <h2>Sign up</h2>
            <form action="">
              <div>
                Name
                <input type="text" />
              </div>
              <div>
                Email
                <input type="text" />
              </div>
              <div>
                Password
                <input type="text" />
              </div>
              <div>
                Number
                <input type="text" />
              </div>
              <div>
                City
                <input type="text" />
              </div>
              <button className='mt-3' onClick={()=>{
                move('/login')
              }}>Sign Up</button>
              
              <p>Already have an acount ?<span className='signin' onClick={() => {
                move('/login')
              }}> Sign In</span></p>
            </form>

          </div>
        </div>
        <div className="col-lg-5 signup-right">

          <img src="signup.png" alt="" />
        </div>
      </div>
    </div>
  )
}
