import React from 'react'
import "./contact.css"
export const Contact = () => {
  return (
    <div className='container-fluid'>

      <div className="row py-5">
        <div className="col-lg-12 contact-h">
          <h1>Contact Page</h1>
        </div>
      </div>





      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3405.2361711527747!2d73.
       09627271447985!3d31.407618559844902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.
       1!3m3!1m2!1s0x39226805ee95c90b%3A0x47f38d6981fa40ad!2sChase%2
       0Up!5e0!3m2!1sen!2s!4v1673870031072!5m2!1sen!2s"
        width="100%"
        height="300"
        style={{ border: 0, }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      >

      </iframe>



      <div className="row py-5">
        <div className="col-lg-12 contact-form">
          <form action="">

            <div>
              <input type="text" placeholder='UserName' />
            </div>
            <div>
              <input type="text" placeholder='Email' />
            </div>
            <div  className='contact-mssg'>
              <textarea placeholder='Enter Your Messege' type="text" />
            </div>

            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}
