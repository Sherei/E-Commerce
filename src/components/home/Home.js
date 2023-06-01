import React from "react";

import { Services } from "./Services";
import { Benefits } from "./Benefits";
import { Herosection } from "./Herosection";
import "./home.css"
import { Companies } from "./Companies";

export const Home = () => {
  return <>
    <div className='container-fluid'>
      <div className='row'>
          <Herosection/>
      </div>
      <div className="row">
        <Services />
      </div>
      <div className="row">
        <Benefits />
      </div>
      <div className="row">
        <Companies />
      </div>
    </div>

  </>
}
