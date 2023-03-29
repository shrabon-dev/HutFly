import React from 'react'
import { AiFillInstagram, AiFillYoutube, AiOutlineTwitter } from 'react-icons/ai'
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa'

export default function Footer() {
  return (
    <>
    <div className='bg-text pb-10'>
    <div className='container py-20'>
        <div className='c-flex flex-wrap'>
            {/* Footer logo */}
            <div className='tablet:w-1/5 mobile:w-[45%]'>
                <picture>
                    <img src='./images/logo.png' alt='logo'/>
                </picture>
                <p className='p py-4 text-[#b8b8b8]'>Best information about the company gies here but now lorem ipsum is</p>
                <ul className='c-flex'>
                    <li><a className='inline-flex w-8 h-8 rounded-full bg-slate-600 justify-center items-center text-white hover:text-main hover:bg-white duration-300 ease-in-out' href='#'><FaFacebookF/></a></li>
                    <li><a className='inline-flex w-8 h-8 rounded-full bg-slate-600 justify-center items-center text-white hover:text-main hover:bg-white duration-300 ease-in-out' href='#'><AiOutlineTwitter/></a></li>
                    <li><a className='inline-flex w-8 h-8 rounded-full bg-slate-600 justify-center items-center text-white hover:text-main hover:bg-white duration-300 ease-in-out' href='#'><FaLinkedinIn/></a></li>
                    <li><a className='inline-flex w-8 h-8 rounded-full bg-slate-600 justify-center items-center text-white hover:text-main hover:bg-white duration-300 ease-in-out' href='#'><AiFillInstagram/></a></li>
                    <li><a className='inline-flex w-8 h-8 rounded-full bg-slate-600 justify-center items-center text-white hover:text-main hover:bg-white duration-300 ease-in-out' href='#'><AiFillYoutube/></a></li>
                </ul>
            </div>
            {/* Footer menu */}
            <div className='tablet:w-1/5 mobile:w-[45%] pl-10 tablet:mt-0 mobile:mt-10'>
                <h6 className='p !font-bold text-white !text-lg'>About</h6>
                <ul>
                    <li><a className='inline-flex pt-2 text-[#b8b8b8] hover:text-main duration-300 ease-in-out' href='#'>About Us</a></li>
                    <li><a className='inline-flex pt-2 text-[#b8b8b8] hover:text-main duration-300 ease-in-out' href='#'>Find store</a></li>
                    <li><a className='inline-flex pt-2 text-[#b8b8b8] hover:text-main duration-300 ease-in-out' href='#'>Categories</a></li>
                    <li><a className='inline-flex pt-2 text-[#b8b8b8] hover:text-main duration-300 ease-in-out' href='#'>Blogs</a></li>
                </ul>
            </div>
            {/* ---------------------- */}
            {/* Footer menu */}
            <div className='tablet:w-1/5 mobile:w-[45%] tablet:mt-0 mobile:mt-10'>
                <h6 className='p !font-bold text-white !text-lg'>Partnership</h6>
                <ul>
                    <li><a className='inline-flex pt-2 text-[#b8b8b8] hover:text-main duration-300 ease-in-out' href='#'>About Us</a></li>
                    <li><a className='inline-flex pt-2 text-[#b8b8b8] hover:text-main duration-300 ease-in-out' href='#'>Find store</a></li>
                    <li><a className='inline-flex pt-2 text-[#b8b8b8] hover:text-main duration-300 ease-in-out' href='#'>Categories</a></li>
                    <li><a className='inline-flex pt-2 text-[#b8b8b8] hover:text-main duration-300 ease-in-out' href='#'>Blogs</a></li>
                </ul>
            </div>
            {/* ---------------------- */}
            {/* Footer menu */}
            <div className='tablet:w-1/5 mobile:w-[45%] tablet:mt-0 mobile:mt-10'>
                <h6 className='p !font-bold text-white !text-lg'>Information</h6>
                <ul>
                    <li><a className='inline-flex pt-2  text-[#b8b8b8] hover:text-main duration-300 ease-in-out' href='#'>About Us</a></li>
                    <li><a className='inline-flex pt-2  text-[#b8b8b8] hover:text-main duration-300 ease-in-out' href='#'>Find store</a></li>
                    <li><a className='inline-flex pt-2  text-[#b8b8b8] hover:text-main duration-300 ease-in-out' href='#'>Categories</a></li>
                    <li><a className='inline-flex pt-2  text-[#b8b8b8] hover:text-main duration-300 ease-in-out' href='#'>Blogs</a></li>
                </ul>
            </div>
            {/* ---------------------- */}
            {/* Footer menu */}
            <div className='tablet:w-1/5 mobile:w-[45%] tablet:mt-0 mobile:mt-10'>
                <h6 className='p !font-bold text-white !text-lg'>For users</h6>
                <ul>
                    <li><a className='inline-flex pt-2  text-[#b8b8b8] hover:text-main duration-300 ease-in-out' href='#'>Login</a></li>
                    <li><a className='inline-flex pt-2  text-[#b8b8b8] hover:text-main duration-300 ease-in-out' href='#'>Register</a></li>
                    <li><a className='inline-flex pt-2  text-[#b8b8b8] hover:text-main duration-300 ease-in-out' href='#'>Settings</a></li>
                    <li><a className='inline-flex pt-2  text-[#b8b8b8] hover:text-main duration-300 ease-in-out' href='#'>My Orders</a></li>
                </ul>
            </div>
            {/* ---------------------- */}
        </div>
    </div>
        <p className='p text-center text-HalfColor'>© 2023 Ecommerce. </p>
    </div>
    </>
  )
}
