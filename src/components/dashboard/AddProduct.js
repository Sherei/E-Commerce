import React from 'react'
import {
  FaTextHeight,
  FaCamera,
} from "react-icons/fa";
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';

import "./addProduct.css"

export const AddProduct = () => {

  let { register, handleSubmit, reset, formState: { errors }, } = useForm();


  function Product(data) {

    axios.post("/product", data).then((res) => {
      try {
        if (res) {
          toast.success("Product Added")
          // reset()
        }
      } catch (e) {
        toast.error("Try Again")
      }
    })

  }

  return <>
    <div className='continer Add_course'>
      <div className='row mb-4'>
        <div className='col-lg-12 col-sm-12'>
          <h1 className='users_head'>Add Product Detail</h1>
        </div>
      </div>
      <div className='row'>
        <div className='col-lg-12 col-sm-12'>
          <form onSubmit={handleSubmit(Product)}>
            <div className='row addcourse_form'>

              <div className='col-lg-6 col-sm-12 mb-5'>
                <div className='addCourse_detail d-flex'>
                  <div className='detail_icon'><FaTextHeight /></div>
                  <input  {...register('title', { required: true, maxLength: 35 })} type="text" placeholder='Title Here*' />
                </div>
              </div>

              <div className='col-lg-6 col-sm-12 mb-5'>
                <div className='addCourse_detail d-flex'>
                  <div className='detail_icon'><FaTextHeight /></div>
                 <select name="" id="" {...register('category', {required:true})}>
                  <option value="mobile">Mobile</option>
                  <option value="laptop">Laptop</option>
                  <option value="watches">Watches</option>
                  <option value="camera">Camera</option>
                  <option value="accessories">Accessories</option>
                 </select>
                </div>
              </div>

              <div className='col-lg-6 col-sm-12 mb-5'>
                <div className='addCourse_detail d-flex'>
                  <div className='detail_icon'><FaTextHeight /></div>
                  <input  {...register('city', {required: true})} type="text" value="Faisalabad" />
                </div>
              </div>

              <div className='col-lg-6 col-sm-12 mb-5'>
                <div className='addCourse_detail d-flex'>
                  <div className='detail_icon'><FaTextHeight /></div>
                  <input  {...register('price', {required: true})} type="number" placeholder='Price *' />
                </div>
              </div>


            </div>
            <div className='row'>
              <div className='col-lg-12 col-sm-12 mb-3'>
                <textarea {...register('description', { required: true, maxLength: 100 })} className='textarea' placeholder='Description *'></textarea>
              </div>
              {errors.description && errors.description.type == 'required' ? <div className='error'>Description is required *</div> : null}
              {errors.description && errors.description.type == 'maxLength' ? <div className='error'>Description Length should be less than 101 characters</div> : null}

              <br />
            </div>
            <div className='row'>
              <div className='col-lg-12 col-sm-12'>
                <button className='course_btn'>Upload</button>
              </div>
            </div>
          </form>
        </div>
      </div>

    </div>
  </>
}
