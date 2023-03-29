import React from 'react'
import { GoTriangleRight } from 'react-icons/go';

export default function Banner() {
    const StyledDiv = `
  height: 100vh;
  background-image: url(./images/banner/banner.png);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
  return (
    <div>
        <div className='container'>

          <div className='c-flex !items-stretch gap-2'>
            <div className='w-1/4 tablet:block mobile:hidden'>
                  {/* <ul className='p-5  space-y-4 text-base font-normal text-text border-2 border-[#e4e4e4] bg-white  rounded-sm font-inter'>
                              <li>
                                 <a className='duration-300 ease-in-out hover:text-main' href='#'>Automobiles</a>
                              </li>
                              <li>
                                 <a className='duration-300 ease-in-out hover:text-main' href='#'>Clothes and wear</a>
                              </li>
                              <li>
                                 <a className='duration-300 ease-in-out hover:text-main' href='#'>Home interiors</a>
                              </li>
                              <li>
                                 <a className='duration-300 ease-in-out hover:text-main' href='#'>Computer and tech</a>
                              </li>
                              <li>
                                 <a className='duration-300 ease-in-out hover:text-main' href='#'>Tools, equipments</a>
                              </li>
                              <li>
                                 <a className='duration-300 ease-in-out hover:text-main' href='#'>Sports and outdoor</a>
                              </li>
                              <li>
                                 <a className='duration-300 ease-in-out hover:text-main' href='#'>Animal and pets</a>
                              </li>
                              <li>
                                 <a className='duration-300 ease-in-out hover:text-main' href='#'>Machinery tools</a>
                              </li>
                              <li className='relative group'>
                                 <a className='duration-300 ease-in-out hover:text-main' href='#'>Sports and outdoor <GoTriangleRight className="inline-block" /></a> */}
                                  {/* Sub menu tablet start */}
                        {/* <ul className='p-5  space-y-3 absolute -top-72 scale-0 duration-300 ease-in-out group-hover:scale-100 -right-32 text-base font-normal text-text border-2 border-[#e4e4e4] bg-white  rounded-sm font-inter'>
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
                        </ul> */}
                                  {/* Sub menu tablet end */}
                              {/* </li>   
                  </ul> */}
            </div>
            <div className='tablet:c-flex tablet:w-3/4 mobile:w-full'>
                {/* Banner Start */}
                  <div className='banner p-10 tablet:w-2/3 mobile:full h-96 bg-cover bg-center bg-no-repeat' style={{ backgroundImage: "url(./images/banner/banner3.jpg)"}}>
                     <div className='text-2xl font-normal tablet:mt-40 mobile:mt-10 text-text mb-2 font-inter'>
                     Latest trending
                     </div>
                     <div className='text-4xl text-main mb-10 font-bold font-inter'>
                     Electronic items
                     </div>
                     <div>
                        <a className='a-button' href='#'>Learn More</a>
                     </div>
                    
                  </div>
                {/* Banner End */}
                {/* Card Start */}
                  <div className='card w-1/3 h-96 ml-2 bg-white border-2 p-10 tablet:block mobile:hidden'>
                     <div className='w-10 h-10 overflow-hidden float-left  bg-black rounded-full'>
                        <img className='w-full  block ' src='./images/profile/profile.png' alt='profile image'/>
                     </div>
                     <div>
                        <p className='font-inter font-normal text-base pl-12 '>Hi, User <span className='block'>let’s get stated</span></p>
                     </div>
                        <a href='#' className='py-2 mt-8 text-sm w-full block text-center text-white font-inter font-semibold rounded-md bg-gradient-to-t from-[#107CFF] to-main'>Join now</a>
                        <a href='#' className='py-2 border-2 mt-1 text-sm w-full block text-center text-text font-semibold  font-inter rounded-md  '>Log in</a>
                    <div className='bg-[#F38332] p-8 rounded-md mt-10 font-inter text-base text-white text-left font-normal'>
                        <p>
                           Get US $10 off with a new supplier
                        </p>
                    </div>
                  </div>
                {/* Card End */}
            </div>
         </div>
        </div>
    </div>
  )
}
