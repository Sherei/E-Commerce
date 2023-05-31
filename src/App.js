import { Navbar } from "./components/navbar/Navbar"
import { Home } from "./components/home/Home"
import { About } from "./components/about/About";
import { Contact } from "./components/contact/Contact"
import { Cart } from "./components/cart/Cart"
import { Footer } from "./components/footer/Footer"

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import "./App.css"


function App() {
  return <div className="main_body">

    <BrowserRouter>

      < Navbar />

      <main>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/cart" element={<Cart />}></Route>

        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
    <ToastContainer></ToastContainer>


  </div>
}

export default App;
