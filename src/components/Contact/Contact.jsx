import React from 'react';
import SeperatorBlack from './images/SeperatorBlack.png';
import SectionHeading from '../Constants/SectionHeading';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast, ToastContainer} from 'react-toastify';
export default function Contact() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email format').required('Email is required'),
      phone: Yup.string()
        .matches(/^\d+$/, 'Phone must be a number')
        .min(10, 'Phone must be at least 10 digits'),
      message: Yup.string().required('Message is required'),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log('Form Data:', values);

      fetch("https://67f98151094de2fe6ea1bf29.mockapi.io/portfolio/contact/messages", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
        .then(response => response.json())
        .then(myData => {
          console.log("Data Sent Successfully", myData);
          toast.success("Hamed received your message!")
          resetForm();
        })
        .catch(err => {
          console.log("error", err);
        });
    }
  });

  return (
    <div id='Contact-me' className='bg-project-light-gray-home text-project-black-first flex justify-center flex-wrap items-center py-24'>
      <div className='w-full flex flex-wrap justify-center items-center'>
        <SectionHeading title='CONTACT' />
        <div className='w-full flex justify-center items-center'>
          <p className='text-center my-24 w-4/5 lg:w-1/2 sm:text-[15px]'>
            I'm always eager to explore new opportunities and take on exciting projects.
            If you have a project in mind, or just want to say hi, feel free to send me a message.
          </p>
        </div>
        <img className='mb-10' src={SeperatorBlack} alt="" />
      </div>

      <form onSubmit={formik.handleSubmit} className='w-4/5 lg:w-1/3 flex flex-wrap justify-center *:mt-15 *:outline-0 *:font-project-Montserrat font-bold text-4'>
        <input
          className='border-b-4 border-l-4 w-full p-5'
          type="text"
          name="name"
          id="name"
          placeholder='ENTER YOUR NAME*'
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.name && formik.errors.name && (
          <div className="text-red-500 text-sm">{formik.errors.name}</div>
        )}

        <input
          className='border-b-4 border-l-4 w-full p-5'
          type="text"
          name="email"
          id="email"
          placeholder='ENTER YOUR EMAIL*'
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.email && formik.errors.email && (
          <div className="text-red-500 text-sm">{formik.errors.email}</div>
        )}

        <input
          className='border-b-4 border-l-4 w-full p-5'
          type="text"
          name="phone"
          id="phone"
          placeholder='PHONE NUMBER'
          value={formik.values.phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.phone && formik.errors.phone && (
          <div className="text-red-500 text-sm">{formik.errors.phone}</div>
        )}

        <textarea
          className='border-b-4 border-l-4 w-full h-40 p-5 resize-none'
          name="message"
          id="message"
          placeholder='YOUR MESSAGE*'
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.message && formik.errors.message && (
          <div className="text-red-500 text-sm">{formik.errors.message}</div>
        )}
        <div className='w-full flex flex-wrap justify-center'>
          <button
            type='submit'
            className='border-x-3 w-[200px] h-[50px] font-bold text-[16px] p-5 cursor-pointer'
          >
            SUBMIT
          </button>
          <ToastContainer
          position="bottom-center"
          theme="dark"
          />
        </div>
      </form>
    </div>
  );
}
