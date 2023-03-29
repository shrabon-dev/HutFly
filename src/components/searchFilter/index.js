import React, { useState } from 'react'
import { TfiAngleDown } from 'react-icons/tfi';
import { AiFillStar } from 'react-icons/ai';

import { AiOutlineStar } from 'react-icons/ai';
// import MultiRangeSlider from "react-js-multi-range-sliders";

export default function SearchFilter() {

  return (
    <>
           
            <div className=' bg-gray-200 h-full  border p-5 !pt-2 smtablet:block mobile:absolute z-50 mobile:h-fit mobile:left-0 '>
                <div className='mb-5'>
                    <h4 className='p tablet:!text-lg text-[#1C1C1C] pb-2 mb-3 border-b !font-bold border-gray-300 c-flex'>Category <TfiAngleDown className='inline-block !text-xs'/> </h4>
                    <ul className='space-y-4 tablet:text-base mobile:text-sm font-normal text-HalfColor font-inter'>
                              <li>
                                 <a className='duration-300 ease-in-out hover:text-main' href='#'>Mobile accessory</a>
                              </li>
                              <li>
                                 <a className='duration-300 ease-in-out hover:text-main' href='#'>Electronics</a>
                              </li>
                              <li>
                                 <a className='duration-300 ease-in-out hover:text-main' href='#'>Smartphones </a>
                              </li>
                              <li>
                                 <a className='duration-300 ease-in-out hover:text-main' href='#'>Modern tech</a>
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
                                 <a className='duration-300 ease-in-out text-main hover:text-main' href='#'>See all...</a>
                              </li>
                  </ul>
                </div>
                <form className=''>
                    <h4 className='p tablet:!text-lg text-[#1C1C1C] pb-2 mb-3 !font-bold border-b border-gray-300 c-flex'>Brands <TfiAngleDown className='inline-block !text-xs'/></h4>
                    {/* Brand Start */}
                    <div>
                        <div className='p  pb-3'>
                            <input type={'checkbox'} id="Samsung"/>
                            <label className='pl-2 p tablet:!text-base mobile:!text-sm' for="Samsung">Samsung</label>
                        </div>
                        <div className='p  pb-3'>
                            <input type={'checkbox'} id="Apple"/>
                            <label className='pl-2 p tablet:text-base mobile:text-sm' for="Apple">Apple</label>
                        </div>
                        <div className='p pb-3'>
                            <input type={'checkbox'} id="Huawei"/>
                            <label className='pl-2 p tablet:text-base mobile:text-sm' for="Huawei">Huawei</label>
                        </div>
                        <div className='p pb-3'>
                            <input type={'checkbox'} id="Pocco"/>
                            <label className='pl-2 p tablet:text-base mobile:text-sm' for="Pocco">Pocco</label>
                        </div>
                        <div className='p pb-3'>
                            <input type={'checkbox'} id="Lenovo"/>
                            <label className='pl-2 p tablet:text-base mobile:text-sm' for="Lenovo">Lenovo</label>
                        </div>
                        <div className='p pb-3'>
                            <a className='duration-300 ease-in-out tablet:text-base mobile:text-sm text-main hover:text-main' href='#'>See all...</a>
                        </div>
                    </div>
                    {/* Brand End */}
                    <h4 className='p tablet:!text-lg text-[#1C1C1C] pb-2 mb-3 !font-bold border-b border-gray-300 c-flex'>Features <TfiAngleDown className='inline-block !text-xs'/></h4>
                    {/* Features Start */}
                    <div>
                        <div className='p pb-3'>
                            <input type={'checkbox'} id="Metallic"/>
                            <label className='pl-2 p tablet:text-base mobile:text-sm' for="Metallic">Metallic</label>
                        </div>
                        <div className='p pb-3'>
                            <input type={'checkbox'} id="Plasticcover"/>
                            <label className='pl-2 p tablet:text-base mobile:text-sm' for="Plasticcover">Plastic cover</label>
                        </div>
                        <div className='p pb-3'>
                            <input type={'checkbox'} id="8GBRam"/>
                            <label className='pl-2 p tablet:text-base mobile:text-sm' for="8GBRam">8GB Ram</label>
                        </div>
                        <div className='p pb-3'>
                            <input type={'checkbox'} id="Superpower"/>
                            <label className='pl-2 p tablet:text-base mobile:text-sm' for="Superpower">Super power</label>
                        </div>
                        <div className='p pb-3'>
                            <input type={'checkbox'} id="LargeMemory"/>
                            <label className='pl-2 p tablet:text-base mobile:text-sm' for="LargeMemory">Large Memory</label>
                        </div>
                        <div className='p pb-3'>
                            <a className='duration-300 tablet:text-base mobile:text-sm ease-in-out text-main hover:text-main' href='#'>See all...</a>
                        </div>
                    </div>
                    {/* Features End */}
                    <h4 className='p tablet:!text-lg text-[#1C1C1C] pb-2 mb-3 !font-bold border-b border-gray-300 c-flex'>Condition <TfiAngleDown className='inline-block !text-xs'/></h4>
                    {/* Condition Start */}
                    <div>
                        <div className='p pb-3'>
                            <input type={'radio'} id="any"/>
                            <label className='pl-2 p tablet:text-base mobile:text-sm' for="any">Any</label>
                        </div>
                        <div className='p pb-3'>
                            <input type={'radio'} id="Refurbished"/>
                            <label className='pl-2 p tablet:text-base mobile:text-sm' for="Refurbished">Refurbished</label>
                        </div>
                        <div className='p pb-3'>
                            <input type={'radio'} id="new"/>
                            <label className='pl-2 p tablet:text-base mobile:text-sm' for="new">Brand New</label>
                        </div>
                        <div className='p pb-3'>
                            <input type={'radio'} id="old"/>
                            <label className='pl-2 p tablet:text-base mobile:text-sm' for="old">Old Brand</label>
                        </div>
                    </div>
                    {/* Condition  End */}
                    {/* Features End */}
                    <h4 className='p tablet:!text-lg text-[#1C1C1C] pb-2 pt-5 mb-3 !font-bold border-b border-gray-300 c-flex'>Ratings <TfiAngleDown className='inline-block !text-xs'/></h4>
                    {/* Price Range Start */}
                    <div>
                        <div className='p pb-3'>
                            <input className='tablet:text-base mobile:!text-sm' type={'checkbox'} id="fiver_star"/>
                            <label className='pl-2 p tablet:text-base mobile:text-sm' for="fiver_star">
                                <AiFillStar className='inline-block text-[#ffb62e]'/>
                                <AiFillStar className='inline-block text-[#ffb62e]'/>
                                <AiFillStar className='inline-block text-[#ffb62e]'/>
                                <AiFillStar className='inline-block text-[#ffb62e]'/>
                                <AiFillStar className='inline-block text-[#ffb62e]'/>

                            </label>
                        </div>
                        <div className='p pb-3'>
                            <input type={'checkbox'} id="four_star"/>
                            <label className='pl-2 p tablet:text-base mobile:text-sm' for="four_star">
                            <AiFillStar className='inline-block text-[#ffb62e]'/>
                            <AiFillStar className='inline-block text-[#ffb62e]'/>
                            <AiFillStar className='inline-block text-[#ffb62e]'/>
                            <AiFillStar className='inline-block text-[#ffb62e]'/>
                            <AiOutlineStar className='inline-block text-[#ffb62e]'/>

                            </label>
                        </div>
                        <div className='p pb-3'>
                            <input type={'checkbox'} id="three_star"/>
                            <label className='pl-2 p tablet:text-base mobile:text-sm' for="three_star">                  
                            <AiFillStar className='inline-block text-[#ffb62e]'/>
                            <AiFillStar className='inline-block text-[#ffb62e]'/>
                            <AiFillStar className='inline-block text-[#ffb62e]'/>
                            <AiOutlineStar className='inline-block text-[#ffb62e]'/>
                            <AiOutlineStar className='inline-block text-[#ffb62e]'/>
                            </label>
                        </div>
                        <div className='p pb-3'>
                            <input type={'checkbox'} id="two_star"/>
                            <label className='pl-2 p tablet:text-base mobile:text-sm' for="two_star">
                 
                            <AiFillStar className='inline-block text-[#ffb62e]'/>
                            <AiFillStar className='inline-block text-[#ffb62e]'/>
                            <AiOutlineStar className='inline-block text-[#ffb62e]'/>
                            <AiOutlineStar className='inline-block text-[#ffb62e]'/>
                            <AiOutlineStar className='inline-block text-[#ffb62e]'/>
                            </label>
                        </div>
                        <div className='p pb-3'>
                            <input type={'checkbox'} id="one_star"/>
                            <label className='pl-2 p tablet:text-base mobile:text-sm' for="one_star">
                             <AiFillStar className='inline-block text-[#ffb62e]'/>
                             <AiOutlineStar className='inline-block text-[#ffb62e]'/>
                             <AiOutlineStar className='inline-block text-[#ffb62e]'/>
                             <AiOutlineStar className='inline-block text-[#ffb62e]'/>
                             <AiOutlineStar className='inline-block text-[#ffb62e]'/>
                            </label>
                        </div>
                    </div>
                    {/* Price Range End */}
                </form>
            </div>
            
    </>
  )
}    