import React, { useState } from 'react'
import { FaUserAlt } from 'react-icons/fa';
import { BiMessageAltDetail } from 'react-icons/bi';
import { HiShoppingCart } from 'react-icons/hi';
import { HiBars3 } from 'react-icons/hi2';
import { AiFillHeart } from 'react-icons/ai';
import { IoCloseOutline } from 'react-icons/io5';
import { GoTriangleDown, GoTriangleRight } from 'react-icons/go';
import { Link } from 'react-router-dom';

export default function Header() {

  let [mobileMenu,setMobileMenu] = useState('');
  let [subMenu,setSubMenu] = useState('');


  return (
    <>
        <div className=''>
      
          <div className='py-2 tablet:c-flex'>
           <div className='tablet:block tablet:w-1/6 mobile:c-flex'>
            {/* logo start */}
             <Link to={'/'}><picture>
              <img className='tablet:w-auto mobile:w-20' src='./images/logo.png' alt='logo' />
             </picture></Link>
            {/* logo end */}
            <div className='tablet:hidden mobile:block'>
                {/* menu box start */}
                     
                    <div className='text-text text-end text-2xl'>
                      {mobileMenu ? 
                      <IoCloseOutline onClick={()=>setMobileMenu(!mobileMenu)} className="inline-block text-3xl"/>
                      :
                      <HiBars3 onClick={()=>setMobileMenu(!mobileMenu)} className="inline-block text-3xl"/>
                      }
                      </div>
       
                {/* menu box end */}
            </div>
           </div>
            {/* search bar Start */}
             <div className='flex tablet:w-3/6 smtablet:w-full mobile:w-full items-center tablet:py-0 mobile:py-6'>
               <input className='inputCss tablet:w-96 smtablet:w-full mobile:w-32 tablet:text-base mobile:text-[8px]' type={'text'} placeholder="Search what you want..."/>
               <select className='tablet:inputCategoryCss mobile:inputCategoryCss mobile:text-[8px] '>
                  <option value={"All Category"}>All Category</option>
                  <option value={"All Category"}>Men</option>
                  <option value={"All Category"}>Women</option>
                  <option value={"All Category"}>Sports</option>
               </select>
               <button className='inputButtonCss tablet:text-base mobile:text-[8px]'>Search</button>
             </div>
            {/* search bar end */}
            {/* user option Start */}
            <div className='flex tablet:w-2/6 tablet:pl-20 tablet:flex-row mobile:flex-col tablet:relative mobile:fixed z-[999999] mobile:top-1/3 mobile:right-0 tablet:rounded-none mobile:rounded-l-lg  tablet:shadow-none mobile:shadow-2xl tablet:text-HalfColor mobile:text-white tablet:bg-transparent mobile:bg-main  items-center justify-between laptop:gap-2 tablet:gap-1 laptop:text-base tablet:text-xs mobile:text-xs text-HalfColor font-inter'>
               <span className='leading-tight tablet:p-0 mobile:px-3 mobile:py-4 tablet:border-none mobile:border-b text-center  cursor-pointer'><FaUserAlt className='m-auto text-base'/>
                   <span className='block mt-1'>Profile</span>
               </span>
               <span className='leading-tight tablet:p-0 mobile:py-4 mobile:px-2 tablet:border-none mobile:border-b text-center cursor-pointer'><BiMessageAltDetail className='m-auto text-base'/>
                   <span className='block mt-1'>Message</span>
               </span>
               <span className='leading-tight tablet:p-0 mobile:py-4 mobile:px-2 tablet:border-none mobile:border-b text-center cursor-pointer'><AiFillHeart className='m-auto text-base'/>
                   <span className='block mt-1'>Orders</span>
               </span>
               <Link className='leading-tight tablet:p-0 mobile:py-4 mobile:px-2 text-center cursor-pointer' to={'/cart'}><HiShoppingCart className='m-auto text-base'/>
                   <span className='block mt-1'>My cart</span>
               </Link>
            </div>
              
            {/* user option end */}
            {/* Mobile Menu Bar Start */}

            {/* {mobileMenu && */}
            <div className='tablet:hidden mobile:block overflow-scroll'>
                {/* menu box start */}
                <div className={mobileMenu ? 'w-2/3 h-full overscroll-auto bg-main fixed z-[999999] top-0  right-0 duration-500 ease-in-out p-5':'w-full  bg-main fixed top-0  -right-[200%] duration-500 ease-in-out p-5'}>
                    <div className='text-white text-start text-2xl'>
                      {mobileMenu ?
                      <IoCloseOutline onClick={()=>setMobileMenu(!mobileMenu)} className="inline-block text-3xl"/>
                      : 
                      <HiBars3 onClick={()=>setMobileMenu(!mobileMenu)} className="inline-block text-3xl"/>
                      }
                    </div>
                      <ul className='p-5 w-72'>
                            <li>
                                <a className='m-menu-a' href='#'>Automobiles</a>
                            </li>
                            <li>
                                <a  className='m-menu-a' href='#'>Clothes and wear</a>
                            </li>
                            <li>
                                <a  className='m-menu-a' href='#'>Home interiors</a>
                            </li>
                            <li>
                                <a  className='m-menu-a' href='#'>Computer and tech</a>
                            </li>
                            <li>
                                <a className='m-menu-a'  href='#'>Tools, equipments</a>
                            </li>
                            <li>
                                <a className='m-menu-a'  href='#'>Sports and outdoor</a>
                            </li>
                            <li>
                                <a className='m-menu-a'  href='#'>Animal and pets</a>
                            </li>
                            <li>
                                <a className='m-menu-a'  href='#'>Machinery tools</a>
                            </li>
                            <li>
                                <a className='m-menu-a' onClick={()=>setSubMenu(!subMenu)} href='#'>Sports and outdoor {subMenu ? <GoTriangleDown className='inline-block'/> :<GoTriangleRight className='inline-block'/>} </a>
                      {/* sub menu start */}
                          
                          <ul className={subMenu ? 'p-8 w-72 bg-main shadow-2xl rounded-lg absolute  z-[999999]  duration-300 ease-in-out -left-32':'p-8 w-72 bg-main shadow-2xl rounded-lg absolute duration-300 ease-in-out z-[999999] left-[200%]'}>
                            <li>
                                <a className='m-menu-a' href='#'>Automobiles</a>
                            </li>
                            <li>
                                <a  className='m-menu-a' href='#'>Clothes and wear</a>
                            </li>
                            <li>
                                <a  className='m-menu-a' href='#'>Home interiors</a>
                            </li>
                            <li>
                                <a  className='m-menu-a' href='#'>Computer and tech</a>
                            </li>
                            <li>
                                <a className='m-menu-a'  href='#'>Tools, equipments</a>
                            </li>
                            <li>
                                <a className='m-menu-a'  href='#'>Sports and outdoor</a>
                            </li>
                            <li>
                                <a className='m-menu-a'  href='#'>Animal and pets</a>
                            </li>
                            <li>
                                <a className='m-menu-a'  href='#'>Machinery tools</a>
                            </li>
                            <li>
                                <a className='m-menu-a' href='#'>Sports and outdoor</a>
                            </li>
                            <li>
                                <a className='m-menu-a' href='#'>Sports and outdoor</a>
                            </li>
                         
                      </ul>
                 
                      {/* sub menu end */}
                            </li>
                            
                         
                      </ul>
                </div>
                {/* menu box end */}
            </div>
            {/* } */}
            {/* Mobile Menu Bar End */}
        </div>
        </div>
    </>
  )
}
