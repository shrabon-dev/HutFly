import React from 'react'
import { FaFacebookF } from 'react-icons/fa'
import { AiOutlineGoogle } from 'react-icons/ai'
import { Link } from 'react-router-dom'

export default function RegistrationComponent() {
  return (
    <>
        <div className='container'>
            <div className='smtablet:w-2/4 m-auto rounded-md p-8 bg-main my-10'>
                <h6 className='p border-b text-white text-center pb-3 mb-10 !font-medium !text-2xl'>Create a new account</h6>
                <form>
                <div className='pt-5'>
                  <label className='p text-white pb-1 block'>Full Name* </label>
                  <input className='p p-2 pl-4 rounded-md w-full outline-none' type={'email'} placeholder="Type your full name"/>
                </div>
                <div className='pt-5'>
                  <label className='p text-white pb-1 block'>Email* </label>
                  <input className='p p-2 pl-4 rounded-md w-full outline-none' type={'email'} placeholder="Type your email"/>
                </div>
                <div className='pt-5 '>
                  <label className='p text-white pb-1 block'>Password* </label>
                  <input className='p p-2 pl-4 rounded-md w-full outline-none' type={'password'} placeholder="Type your password"/>
                </div>
                <div className='pt-5'>
                  <label className='p text-white pb-1 block'>Confirm Password* </label>
                  <input className='p p-2 pl-4 rounded-md w-full outline-none' type={'password'} placeholder="Type your phone number"/>
                </div>
                
                <div className='text-center pt-14'>
                <button className='p shadow-2xl shadow-main hover:text-white hover:bg-main duration-300 ease-in-out hover:shadow-xl text-main w-full bg-white px-8 !font-medium py-2 rounded-md '>Register</button>
                  <p className='p text-center py-2 text-white'>Or</p>
                <button className='p shadow-2xl shadow-main  text-white w-full bg-[#3B5998] px-8 !font-medium py-2 rounded-md '> <FaFacebookF className="inline"/>  Facebook </button>
                <button className='p shadow-2xl shadow-main mt-5  text-white w-full bg-[#D34836] px-8 !font-medium py-2 rounded-md '> <AiOutlineGoogle className="inline"/>  Google </button>

                </div>
                </form>
                <p className='p text-center pt-5 text-white'>Have you already account? <Link className="text-[blue]" to={"/login"}>login here</Link></p>
            </div>
        </div>
    </>
  )
}
