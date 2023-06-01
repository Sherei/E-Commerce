import React from 'react'
import "./login.css"
import { useNavigate } from 'react-router'
export const Login = () => {

  let move = useNavigate()

  return (

    <div className='container'>


      <div className="row my-5 signin">
        <div className="col-lg-7 signup-left">

          <div className="signin-form">

            <h1>BuyRight</h1>
            <p>Welcome Back !!!</p>
            <h2>Sign in</h2>

            <form action="">


              <div>
                Email
                <input type="text" />
              </div>
              <div>
                Password
                <input type="text" />
              </div>
              <button className='mt-3' onClick={()=>{
                move('/product')
              }}>Login</button>
              
              <p>I don't have an acount ?<span onClick={()=>{
                move("/signup")
              }}> Sign up</span></p>
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
