import React, { useEffect, useState } from 'react'
import { FaBars } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';

function MenuBar() {

    let [scrollY,setScrollY] = useState(0);
    let [categoryShow,setCategoryShow] = useState(false)
    let location =useLocation();

    useEffect(()=>{
        function handleScroll(){
            setScrollY(window.scrollY)
        }

        window.addEventListener('scroll',handleScroll)

        return()=>{
            window.removeEventListener('scroll',handleScroll)
        }
    },[])
    useEffect(()=>{
      
        if(location.pathname == '/'){
            if(scrollY > 300){
                setCategoryShow(false)
          }else{
              setCategoryShow(true)
          }
        }
    },[scrollY])
 
    useEffect(()=>{
        if(location.pathname == '/'){
            setCategoryShow(true)
            console.log(location.pathname)
            }else{
                setCategoryShow(false)
                console.log(location.pathname)
        }
    },[])
 
 
  return (
    <div>
        <div className='border-y-2 my-5 tablet:block mobile:hidden'>
        <div className='container '>
         <div className='py-2 c-flex '>
                 {/* SideMenu Start */}
                  <div>
                     <ul className='text-base font-normal font-inter relative'>
                        <li className='laptop:text-base tablet:text-sm cursor-pointer hover:text-main duration-300 ease-in-out' onClick={()=>setCategoryShow(!categoryShow)}> <FaBars className='inline-block' /> All category  </li> 
                        {categoryShow &&
                        <ul className='p-5 w-72 absolute top-10 left-0 space-y-3 text-base font-normal text-text border-2 border-[#e4e4e4] bg-white mt-5 rounded-sm font-inter duration-300 ease-in-out'>
                            <li>
                                <a href='#'>Automobiles</a>
                            </li>
                            <li>
                                <a href='#'>Clothes and wear</a>
                            </li>
                            <li>
                                <a href='#'>Home interiors</a>
                            </li>
                            <li>
                                <a href='#'>Computer and tech</a>
                            </li>
                            <li>
                                <a href='#'>Tools, equipments</a>
                            </li>
                            <li>
                                <a href='#'>Sports and outdoor</a>
                            </li>
                            <li>
                                <a href='#'>Animal and pets</a>
                            </li>
                            <li>
                                <a href='#'>Machinery tools</a>
                            </li>
                            <li>
                                <a href='#'>Sports and outdoor</a>
                            </li>
                            <li>
                                <a href='#'>Sports and outdoor</a>
                            </li>
                         
                        </ul>
                        }
                     </ul>
                  </div>
                 {/* SideMenu End */}
                 {/* Verticle Menu Start */}
                   <div>
                        <ul className='c-flex laptop:space-x-10 tablet:space-x-6 laptop:text-base tablet:text-sm text-base font-normal font-inter text-HalfColor'>
                            <li>
                                <Link  className='duration-300 ease-in-out hover:text-main' to={'/'}>Home</Link >
                            </li>
                            <li>
                                <Link className='duration-300 ease-in-out hover:text-main' to={'/shop'}>Shop</Link>
                            </li>
                            <li>
                                <a className='duration-300 ease-in-out hover:text-main' href='#'>Offer</a>
                            </li>
                            <li>
                                <Link className='duration-300 ease-in-out hover:text-main' to={'/register'}>Vecome a saler </Link>
                            </li>  
                            <li>
                                <Link className='duration-300 ease-in-out hover:text-main' to={'/register'}>Create a account</Link>
                            </li>  
                            <li>
                                <Link className='duration-300 ease-in-out hover:text-main' to={'/login'}>Login </Link>
                            </li>  
                        </ul>
                   </div>
                 {/* Verrticle  Menu End */}
                 {/* Language Start */}
                   <div>
                     <select className='inputCategoryCss !bg-white !border-none !text-white !text-base !font-normal'>
                        <option value={'usd'}>English, USD</option>
                        <option value={'bdt'}>Bangladesh, BDT</option>
                     </select>
                   </div>
                 {/* Language End */}
         </div>
        </div>
        </div>
    </div>
  )
}

export default MenuBar