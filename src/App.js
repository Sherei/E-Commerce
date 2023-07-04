import { Navbar } from "./components/navbar/Navbar"
import { Home } from "./components/home/Home"
import { About } from "./components/about/About";
import { Contact } from "./components/contact/Contact"
import { Cart } from "./components/cart/Cart"
import { Footer } from "./components/footer/Footer"
import { Products } from "./components/Products/Products";
import { Error } from "./components/Error/Error";
import { Login } from "./components/login/Login";
import { Signup } from "./components/signup/Signup";
import Sidebar from "./components/Dashboard/Sidebar"
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios"
import "./App.css"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";



function App() {

  let cu = useSelector(store => store.userSection.cu)
  let dispatch = useDispatch()
  useEffect(function () {

    axios.post('/session-check', { token: localStorage.getItem('userToken') }).then(function (res) {
      if (res.data) {
        dispatch({
          type: "LOGIN_USER",
          payload: res.data
        })
      }
    })

  }, [])

  return <div className="main_body">

    <BrowserRouter>

      < Navbar />

      <main>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/product" element={<Products />}></Route>
          <Route exact path="/cart" element={<Cart />}></Route>
          <Route exact path="*" element={<Error />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/signup" element={<Signup />}></Route>
          <Route exact path="/dashboard" element={<Sidebar />}></Route>
        </Routes>
      </main>
      {cu.email != "asd@gmail.com" &&
        <Footer />
      }
    </BrowserRouter>
    <ToastContainer></ToastContainer>


  </div>
}

export default App;
