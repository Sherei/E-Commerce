import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import "./addproduct.css"
import axios from 'axios';
import { toast } from 'react-toastify';

export const AddProduct = () => {

  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedColors, setSelectedColors] = useState([]);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleColorChange = (event) => {
    const selectedOptions = Array.from(event.target.selectedOptions, (option) => option.value);
    setSelectedColors(selectedOptions);
  };

  let move = useNavigate();

  let { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [imagePreviews, setImagePreviews] = useState([]);

  const handleImageChange = (event) => {
    const files = event.target.files;
    const previews = [];

    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();
      reader.onload = (e) => {
        previews.push(e.target.result);
        if (previews.length === files.length) {
          setImagePreviews(previews);
        }
      };
      reader.readAsDataURL(files[i]);
    }
  };

  async function submitProduct(data) {
    console.log(data);
    let meraForm = new FormData();
    meraForm.append('title', data.title);
    meraForm.append('sn', data.sn);
    meraForm.append('category', data.category);
    meraForm.append('subCategory', data.subCategory);
    meraForm.append('color1', data.color1);
    meraForm.append('color2', data.color2);
    meraForm.append('color3', data.color3);
    meraForm.append('color4', data.color4);
    meraForm.append('color5', data.color5);
    meraForm.append('inStock', data.inStock);
    meraForm.append('city', data.city);
    meraForm.append('description', data.description);
    meraForm.append('price', data.price);
    meraForm.append('pic', data.pic[0]);
    try {
      let response = await axios.post("/product", meraForm)

      if (response.data === "Product Added") {
        toast.success("Product Uploaded");
      }
    } catch (error) {

      if (error.response && error.response.status === 400) {
        toast.warning("Try with different Serial number");
      } else {
        toast.error("An error occurred. Please try again later.");
      }

    }
  };

  return (
    <div className='container my-4'>
      <div className='row border py-5 px-4'>
        <div className='col-lg-12 col-sm-12'>
          <h1 className='p_head' style={{ color: "rgb(2, 2, 94)", fontWeight: "700" }}> Add Product </h1>
          <form>
            <div className='row mt-4'>
              <div className='col-lg-6 col-sm-12  my-2'>
                <label style={{ fontSize: "17px", fontWeight: "600" }}>Add Title *</label>
                <input type="text" {...register('title', { required: true, maxLength: 20 })} className="form-control mb-2 mr-sm-2" placeholder="Samsung" />
                {errors.title && errors.title.type == "required" ? <div className='error'> Title is required </div> : null}
                {errors.title && errors.title.type == "maxLength" ? <div className='error'>Title Should Contain less than 20 characters </div> : null}
              </div>
              <div className='col-lg-6 col-sm-12  my-2'>
                <label style={{ fontSize: "17px", fontWeight: "600" }}>Serial Number *</label>
                <input type="number" {...register('sn', { required: true })} min={"1"} className="form-control mb-2 mr-sm-2" placeholder="1234" />
                {errors.sn && errors.sn.type == "required" ? <div className='error'>Serail Number is required</div> : null}
              </div>
            </div>
            <div className='row'>

              <div className='col-lg-6 col-sm-12  my-2'>
                <label style={{ fontSize: "17px", fontWeight: "600" }}>Select Category *</label>
                <select  {...register('category', {
                  required: true, validate: function (selectedValue) {
                    if (selectedValue == "Select Category") {
                      return false;
                    } else {
                      return true;
                    }
                  }
                })} className="form-control mb-2 mr-sm-2" onChange={handleCategoryChange}>
                  <option value="Select Category">Select Category</option>
                  <option value="mobiles">Mobiles</option>
                  <option value="laptops">Laptops</option>
                  <option value="watches">Watches</option>
                  <option value="camera">Camera</option>
                  <option value="accessories">Accessories</option>
                </select>
                {errors.category ? <div className='error'>Category is required</div> : null}
              </div>

              {selectedCategory === 'mobiles' && (
                <div className='col-lg-6 col-sm-12  my-2'>
                  <label style={{ fontSize: "17px", fontWeight: "600" }}>Brand *</label>
                  <select {...register('subCategory', {
                    required: true, validate: function (selectedValue) {
                      if (selectedValue == "Select Mobiles Brand") {
                        return false;
                      } else {
                        return true;
                      }
                    }
                  })} className="form-control mb-2 mr-sm-2">
                    <option value="">Select Mobiles Brand</option>
                    <option value="Apple">Apple</option>
                    <option value="Samsung">Samsung</option>
                    <option value="Nokia">Nokia</option>
                    <option value="Oppo">Oppo</option>
                    <option value="Huawei">Huawei</option>
                    <option value="Lenovo">Lenovo</option>
                    <option value="Others">Others</option>
                  </select>
                  {errors.subCategory ? <div className='error'>Select Mobile Brand</div> : null}

                </div>
              )}
              {selectedCategory === 'laptops' && (
                <div className='col-lg-6 col-sm-12  my-2'>
                  <label style={{ fontSize: "17px", fontWeight: "600" }}>Brand *</label>
                  <select {...register('subCategory', {
                    required: true, validate: function (selectedValue) {
                      if (selectedValue == "Select Laptop Brand") {
                        return false;
                      } else {
                        return true;
                      }
                    }
                  })} className="form-control mb-2 mr-sm-2">
                    <option value="">Select Laptop Brand</option>
                    <option value="Apple">Apple</option>
                    <option value="Samsung">Samsung</option>
                    <option value="Hp">Hp</option>
                    <option value="Dell">Dell</option>
                    <option value="Lenovo">Lenovo</option>
                    <option value="Toshiba">Toshiba</option>
                    <option value="Others">Others</option>
                  </select>
                  {errors.subCategory ? <div className='error'>Select Laptop Brand</div> : null}

                </div>
              )}

              {selectedCategory === 'watches' && (
                <div className='col-lg-6 col-sm-12  my-2'>
                  <label style={{ fontSize: "17px", fontWeight: "600" }}>Brand *</label>
                  <select {...register('subCategory', {
                    required: true, validate: function (selectedValue) {
                      if (selectedValue == "Select Watch Brand") {
                        return false;
                      } else {
                        return true;
                      }
                    }
                  })} className="form-control mb-2 mr-sm-2">
                    <option value="">Select Watch Brand</option>
                    <option value="Rado">Rado</option>
                    <option value="Rolex">Rolex</option>
                    <option value="Omega">Omega</option>
                    <option value="Seiko">Seiko</option>
                    <option value="Hublot">Hublot</option>
                    <option value="Others">Others</option>
                  </select>
                  {errors.subCategory ? <div className='error'>Select Watch Brand</div> : null}

                </div>
              )}
              {selectedCategory === 'camera' && (
                <div className='col-lg-6 col-sm-12  my-2'>
                  <label style={{ fontSize: "17px", fontWeight: "600" }}>Brand *</label>
                  <select {...register('subCategory', {
                    required: true, validate: function (selectedValue) {
                      if (selectedValue == "Select Camera Brand") {
                        return false;
                      } else {
                        return true;
                      }
                    }
                  })} className="form-control mb-2 mr-sm-2">
                    <option value="">Select Camera Brand</option>
                    <option value="Sony">Sony</option>
                    <option value="Canon">Canon</option>
                    <option value="Nikon">Nikon</option>
                    <option value="kodak">kodak</option>
                    <option value="Panasonic">Panasonic</option>
                    <option value="Samsung">Samsung</option>
                    <option value="Others">Others</option>
                  </select>
                  {errors.subCategory ? <div className='error'>Select Camera Brand</div> : null}

                </div>
              )}

            </div>
            <div className='row'>
              <div className='col-lg-6 col-sm-12 my-2'>
                <label style={{ fontSize: "17px", fontWeight: "600" }}>Select Color 1 *</label>
                <input {...register('color1', { required: true })} type="text" className="form-control mb-2 mr-sm-2" placeholder="Black" />
                {errors.color1 ? <div className='error'>This color is required</div> : null}
              </div>
              <div className='col-lg-6 col-sm-12 my-2'>
                <label style={{ fontSize: "17px", fontWeight: "600" }}>Select Color 2</label>
                <input {...register('color2')} type="text" className="form-control mb-2 mr-sm-2" placeholder="Grey" />
              </div>
              <div className='col-lg-6 col-sm-12 my-2'>
                <label style={{ fontSize: "17px", fontWeight: "600" }}>Select Color 3</label>
                <input {...register('color3')} type="text" className="form-control mb-2 mr-sm-2" placeholder="Sky Blue" />
              </div>
              <div className='col-lg-6 col-sm-12 my-2'>
                <label style={{ fontSize: "17px", fontWeight: "600" }}>Select Color 4</label>
                <input {...register('color4')} type="text" className="form-control mb-2 mr-sm-2" placeholder="Voilet" />
              </div>
              <div className='col-lg-6 col-sm-12 my-2'>
                <label style={{ fontSize: "17px", fontWeight: "600" }}>Select Color 5</label>
                <input {...register('color5')} type="text" className="form-control mb-2 mr-sm-2" placeholder="White" />
              </div>
              <div className='col-lg-6 col-sm-12  my-2'>
                <label style={{ fontSize: "17px", fontWeight: "600" }}>In Stock *</label>
                <input {...register('inStock', { required: true })} type="number" min={"1"} className="form-control mb-2 mr-sm-2" placeholder="12" />
                {errors.inStock ? <div className='error'>Stock value is required</div> : null}
              </div>
            </div>
            <div className='row'>
              <div className='col-lg-6 col-sm-12  my-2'>
                <label style={{ fontSize: "17px", fontWeight: "600" }}>City *</label>
                <input {...register('city', { required: true })} type="text" defaultValue={"Faisalabad"} className="form-control mb-2 mr-sm-2" placeholder="12" />
              </div>
              <div className='col-lg-6 col-sm-12  my-2'>
                <label style={{ fontSize: "17px", fontWeight: "600" }}>Add Description *</label>
                <textarea {...register('description', { required: true, minLength: 15 })} className="form-control" rows={3} defaultValue={""} />
                {errors.description && errors.description.type == "required" ? <div className='error'> Description is required </div> : null}
                {errors.description && errors.description.type == "minLength" ? <div className='error'>Description Should Contain more than 15 characters </div> : null}
              </div>
            </div>
            <div className='row'>

              <div className='col-lg-6 col-sm-12  my-2'>
                <label style={{ fontSize: "17px", fontWeight: "600" }}>Price *</label>
                <input type="number" {...register('price', { required: true, minLength: 3 })} min={"1"} className="form-control mb-2 mr-sm-2" placeholder="1234" />
                {errors.price && errors.price.type == "required" ? <div className='error'>Price is required</div> : null}
                {errors.price && errors.price.type == "minLength" ? <div className='error'>Price Contain at least 3 numbers</div> : null}
              </div>

              <div className='col-lg-6 col-sm-12  my-2 '>
                <label style={{ fontSize: "17px", fontWeight: "600" }}>Product Pic *</label>
                <input type='file' {...register('pic', { required: true })} onChange={handleImageChange} className="form-control mb-2 mr-sm-2" placeholder="12" />
                {errors.pic && errors.pic.type == "required" ? <div className='error'>Pic is required</div> : null}
                {errors.pic && errors.pic.type == "minLength" ? <div className='error'>Select Atleast 2 Pictures</div> : null}
                {errors.pic && errors.pic.type == "maxLength" ? <div className='error'>Don't select more than 5 images</div> : null}

                <div className="image-previews" style={{ width: "50px" }}>
                  {imagePreviews.map((preview, index) => (
                    <img key={index} src={preview} alt={`Preview ${index + 1}`} className="preview-image" />
                  ))}
                </div>
              </div>
            </div>
            <div className='col-lg-12 col-sm-12 my-5'>
              <button type="button" className="btn btn-primary" onClick={handleSubmit(submitProduct)}>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div >
    </div >
  );
};
