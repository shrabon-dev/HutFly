import React, { useState } from 'react'
import { AiFillHeart, AiFillStar, AiOutlineCheck, AiOutlineHeart, AiOutlineStar } from 'react-icons/ai'
import { BiCommentDetail } from 'react-icons/bi'
import { GiBeachBag } from 'react-icons/gi'
import { MdVerifiedUser } from 'react-icons/md'
import { BsGlobe, BsReplyFill } from 'react-icons/bs'
import RelatedProduct from '../relatedProduct'

export default function AddtoCard() {

  let [saveforlater,setSaveforlater] = useState();
  let [description,setDescription] = useState(true);
  let [reviews,setReviews] = useState();
  let [shipping,setShipping] = useState();




  let handleSaveForLater = () =>{
    setSaveforlater(!saveforlater)
  }
  let handleDescriptuion = () =>{
    setDescription(true)
    setReviews(false)
    setShipping(false)
  }
  let handleReview = () =>{
    setDescription(false)
    setReviews(true)
    setShipping(false)
  }
  let handleShipping = () =>{
    setDescription(false)
    setReviews(false)
    setShipping(true)
  }


  return (
    <>
      {/* product image details show  start*/}
      <div className='container'>
        <div className='tablet:c-flex !items-stretch  pt-6'>
            {/*product image  */}
            <div className='tablet:w-2/5 border rounded-md'>
              {/* main image start */}
              <div className='w-full block  p-1'><picture><img className='w-full block' src='./images/product/p3.jpg' alt='product 1'/></picture></div>
              {/* main image end */}
              {/* small product image start */}
              <div className='c-flex'>
                  <div className='w-1/4 border rounded-md p-1 cursor-pointer hover:scale-105 duration-300 ease-in-out'><picture><img src='./images/product/p3.jpg' alt='product 1'/></picture></div>
                  <div className='w-1/4 border rounded-md p-1 cursor-pointer hover:scale-105 duration-300 ease-in-out'><picture><img src='./images/product/p3.jpg' alt='product 1'/></picture></div>
                  <div className='w-1/4 border rounded-md p-1 cursor-pointer hover:scale-105 duration-300 ease-in-out'><picture><img src='./images/product/p3.jpg' alt='product 1'/></picture></div>
                  <div className='w-1/4 border rounded-md p-1 cursor-pointer hover:scale-105 duration-300 ease-in-out'><picture><img src='./images/product/p3.jpg' alt='product 1'/></picture></div>
              </div>
              {/* small product image end */}
            </div>
            {/*product image  */}
            {/*product details  */}
            <div className=' tablet:w-2/5 tablet:pl-5'>
              {/*in stock or out stock start */}
                <p className='text-main p tablet:pt-0 mobile:pt-5'> <AiOutlineCheck className='inline'/> In stock</p>
              {/*in stock or out stock end */}
              <h2 className='p !font-semibold !text-text pt-2'>Mens Long Sleeve T-shirt Cotton Base Layer Slim Muscle</h2>
             {/* product rate show start*/}
               <div className='c-flex mt-5'>
                <p className='p !text-sm'> 
                 <span className='mr-1'>
                <AiFillStar className='inline-block text-[#ffb62e]'/>
                <AiFillStar className='inline-block text-[#ffb62e]'/>
                <AiFillStar className='inline-block text-[#ffb62e]'/>
                <AiFillStar className='inline-block text-[#ffb62e]'/>
                <AiOutlineStar className='inline-block text-[#ffb62e]'/>
                </span> 4.00</p>
                <p className='p !text-sm'>
                  <BiCommentDetail className='inline-block text-gray-600 mr-1'/> 32 reviews
                </p>
                <p className='p !text-sm'>
                 <GiBeachBag className='inline-block text-gray-600 mr-1'/>
                 154 sold
                </p>
               </div>
             {/* product rate show end */}
              <div className='bg-yellow-100 w-full h-16 mt-3 c-flex p-3'>
                <span className='p  pr-3'><b className='text-red-400'>$98.00</b>                  
                <span className='block !text-xs'>50-100 pcs</span>
                </span>
                <span className='w-[2px] bg-gray-300 h-full'></span>
                <span className='p px-3'><b className='text-text'>$98.00</b>                  
                <span className='block  !text-xs'>100-700 pcs</span>
                </span>
                <span className='w-[2px] bg-gray-300 h-full'></span>

                <span className='p pl-3'><b className='text-text'>$78.00</b>                  
                <span className='block  !text-xs'>700+ pcs</span>
                </span>
              </div>
              <ul className=' pt-3 p !text-sm text-text'>
                <li className='relative pl-32 pt-2'> <span className='text-gray-500 absolute left-0'>Price</span><span>: Negotiable</span> </li>
                <li className='relative pl-32 pt-2'> <span className='text-gray-500 absolute left-0'>Type</span><span>: Classic Shoes</span> </li>
                <li className='relative pl-32 pt-2'> <span className='text-gray-500 absolute left-0'>Material</span><span>: Plastic material</span> </li>
                <li className='relative pl-32 pt-2'> <span className='text-gray-500 absolute left-0'>Design</span><span>: Modern nice</span> </li>
                <li className='relative pl-32 pt-2'> <span className='text-gray-500 absolute left-0'>Customization</span><span>: Customization logo and design custom packages</span> </li>
                <li className='relative pl-32 pt-2'> <span className='text-gray-500 absolute left-0'>Protection</span><span>: Refund policy</span> </li>
                <li className='relative pl-32 pt-2'> <span className='text-gray-500 absolute left-0'>Warranty</span><span>: 2years full warranty</span> </li>
              </ul>
            </div>
            {/*product details  */}
            {/*product Owner  */}
            <div className=' tablet:w-1/5 tablet:pl-3 tablet:pt-0 mobile:pt-5'>
           
              <div className='p-3 border'>
              <div className='c-flex !justify-start gap-2 pb-5 border-b'>
                <picture className='w-12'>
                  <img src='./images/profile/profile.png' alt='country'/>
                </picture>
                <h6 className='p !text-sm pl-2'>
                  Supplier 
                <span className='!text-xs text-main block'> Guanjoi Trading LLC </span>
                </h6>
              </div>
                <ul className='p !text-sm text-gray-500 pt-3 space-y-2'>
                  <li> <picture className='w-4'>
                  <img className='w-4 inline-block' src='./images/country/c5.png' alt='country'/>
                </picture> Germany, Berlin</li>
                  <li> <MdVerifiedUser className='inline-block'/>  Verified Seller</li>
                  <li> <BsGlobe className='inline-block'/> Worldwide Shipping</li>
                </ul>
                <a href='#' className='py-2 mt-8 text-sm w-full block text-center text-white font-inter font-semibold rounded-md bg-gradient-to-t from-[#107CFF] to-main'>Send inquiry</a>
                <a href='#' className='py-2 border-2 mt-1 text-sm w-full block text-center text-text font-semibold  font-inter rounded-md  '>Saller's profile</a>
              </div>
                <p className='text-center p  pt-5 cursor-pointer' onClick={handleSaveForLater} ><span  className='block p !text-sm  text-main duration-300 ease-in-out hover:text-red-500'>
                  {saveforlater ?
                  <AiFillHeart className='inline-block text-lg mr-1'/> 
                  :
                  <AiOutlineHeart className='inline-block text-lg mr-1'/> 
                  }
                  Save for later </span></p>

            
            </div>
            {/*product Owner  */}
        </div>

        {/* description start */}
          <div className='tablet:c-flex !items-stretch gap-5 pt-10'>
            <div className='tablet:w-3/4 p-5 border rounded'>
               {/* navs start */}
            <div className='p !text-sm  space-x-5 pb-2 text-HalfColor border-b mb-5'>
               <span onClick={handleDescriptuion} className='duration-300 ease-in-out hover:text-main cursor-pointer'>Description</span>
               <span onClick={handleReview} className='duration-300 ease-in-out hover:text-main cursor-pointer'>Reviews</span>
               <span onClick={handleShipping} className='duration-300 ease-in-out hover:text-main cursor-pointer'>Shipping</span>
            </div>
            {/* navs end */}
             {/* tabs start  */}
              <div className=' mb-28 bg-gray-200 rounded'>
                 {description && 
                  <div className='w-full bg-gray-200 p-5 rounded text-white'>
                    <p className='p text-text '>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                      pariatur.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                      Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                    
                  </div>
                }
                {reviews && 
                  <div className='w-full p-5 rounded bg-gray-200 text-white'>
                        <div className='c-flex !items-stretch !justify-start pb-5 border-b'>
                          <img className='w-12 h-12 block ' src='./images/profile/profile.png' alt='country'/>
                        <div>
                        <h6 className='p text-text !text-sm pl-2'>
                          Ali Usman
                        <p className='p !text-sm'> 
                        <span className='mr-1'>
                        <AiFillStar className='inline-block text-[#ffb62e]'/>
                        <AiFillStar className='inline-block text-[#ffb62e]'/>
                        <AiFillStar className='inline-block text-[#ffb62e]'/>
                        <AiFillStar className='inline-block text-[#ffb62e]'/>
                        <AiOutlineStar className='inline-block text-[#ffb62e]'/>
                        </span> 4.00</p>
                        </h6>
                         <p className='p text-gray-500 tablet:w-96 !text-xs pl-3 pt-2'>
                          
                          Mutamuti Valo beshi na. Delivary ta late koira dise</p>
                          
                        </div>
                        </div>
                        {/* feedback start */}
                        <div className='c-flex !items-stretch !justify-start pb-5 border-b'>
                        
                          <img className='w-12 h-12 block' src='./images/profile/profile.png' alt='country'/>
                        <div>
                        <h6 className='p text-text !text-sm pl-2'>
                          Rasel Shek
                        <p className='p !text-sm'> 
                        <span className='mr-1'>
                        <AiFillStar className='inline-block text-[#ffb62e]'/>
                        <AiFillStar className='inline-block text-[#ffb62e]'/>
                        <AiFillStar className='inline-block text-[#ffb62e]'/>
                        <AiFillStar className='inline-block text-[#ffb62e]'/>
                        <AiFillStar className='inline-block text-[#ffb62e]'/>
                        </span> 5.00</p>
                        </h6>
                          <p className='p text-gray-500 tablet:w-96 !text-xs pl-3 pt-2'>exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                          pariatur.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                          Quis nostrud exercitation ullamco laboris nisi ut 
                     
                          </p> 
                          {/* reply start */}
                          <div className='p text-gray-500 tablet:w-96 !text-xs pl-3 pt-2'>
                          <div className='text-right'><BsReplyFill className='inline-block text-2xl' />
                          <div className='c-flex !items-stretch !justify-start pb-5 border-b'>                     
                            <div className='text-right'>
                            <picture className='w-12 ml-auto'>
                              <img className='w-12 ml-auto' src='./images/profile/profile.png' alt='country'/>
                            </picture>
                            <h6 className='p text-text !text-sm pl-2'>

                              Ali Usman
                            </h6>
                            <p className='p text-gray-500 tablet:w-96 !text-xs pl-3 pt-2'>Mutamuti Valo beshi na. Delivary ta late koira dise</p>
                              
                            </div>
                            </div>
                          </div>
                          </div> 
                          {/* reply end */}                      
                        </div>
                        </div>
                        {/* feedback end */}
                        {/* feedback start */}
                        <div className='c-flex !items-stretch !justify-start pb-5 border-b'>
                          <img className='w-12 h-12 block' src='./images/profile/profile.png' alt='country'/>
                        <div>
                        <h6 className='p text-text !text-sm pl-2'>
                          Rasel Shek
                        <p className='p !text-sm'> 
                        <span className='mr-1'>
                        <AiFillStar className='inline-block text-[#ffb62e]'/>
                        <AiFillStar className='inline-block text-[#ffb62e]'/>
                        <AiFillStar className='inline-block text-[#ffb62e]'/>
                        <AiFillStar className='inline-block text-[#ffb62e]'/>
                        <AiFillStar className='inline-block text-[#ffb62e]'/>
                        </span> 5.00</p>
                        </h6>
                          <p className='p text-gray-500 tablet:w-96 !text-xs pl-3 pt-2'>exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                          pariatur.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                          Quis nostrud exercitation ullamco laboris nisi ut 
                     
                          </p> 
                          {/* reply start */}
                          <div className='p text-gray-500 tablet:w-96 !text-xs pl-3 pt-2'>
                          <div className='text-right'><BsReplyFill className='inline-block text-2xl' />
                          <div className='c-flex !items-stretch !justify-start pb-5 border-b'>                     
                            <div className='text-right'>
                            <picture className='w-12 ml-auto'>
                              <img className='w-12 ml-auto' src='./images/profile/profile.png' alt='country'/>
                            </picture>
                            <h6 className='p text-text !text-sm pl-2'>

                              Ali Usman
                            </h6>
                            <p className='p text-gray-500 tablet:w-96 !text-xs pl-3 pt-2'>Mutamuti Valo beshi na. Delivary ta late koira dise</p>
                              
                            </div>
                            </div>
                          </div>
                          </div> 
                          {/* reply end */}                      
                        </div>
                        </div>
                        {/* feedback end */}

                  </div>
                }
                {shipping && 
                  <div className='w-full bg-gray-200 rounded text-white p-5'>
                                     <p className='p text-text '>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
                      pariatur.  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                      Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
                    
                  </div>
                }
             
              </div>
             {/* tabs end */}
            </div>
            <div className='tablet:w-1/4 border p-3 rounded-md'>
              <h6 className='p !text-xl text-text pb-5 !font-semibold'>You may like</h6>
              {/* highlight product start*/}
              <div className='c-flex tablet:w-full tablet:p-0 mobile:p-2 smtablet:w-1/2 tablet:flex smtablet:inline-flex !items-stretch !justify-start gap-3 mb-3 cursor-pointer hover:bg-gray-200 duration-300 ease-in-out'>
                <div className='w-1/3  border rounded-md'><picture><img className='w-full block' src='./images/product/p6.jpg' alt='country'/></picture></div>
                <div>
                  <h4 className='p !font-semibold !text-sm'>T-shirt for men</h4>
                  <p className='p text-HalfColor pt-1'>$40.00</p>
                </div>
              </div>
              {/* highlight product end*/}
              {/* highlight product start*/}
              <div className='c-flex tablet:w-full tablet:p-0 mobile:p-2 smtablet:w-1/2 tablet:flex smtablet:inline-flex !items-stretch !justify-start gap-3 cursor-pointer mb-3  hover:bg-gray-200 duration-300 ease-in-out'>
                <div className='w-1/3 border rounded-md'><picture><img className='w-full block' src='./images/product/p.jpg' alt='country'/></picture></div>
                <div>
                  <h4 className='p !font-semibold !text-sm'>Black Punjabi</h4>
                  <p className='p text-HalfColor pt-1'>$40.00</p>
                </div>
              </div>
              {/* highlight product end*/}
              {/* highlight product start*/}
              <div className='c-flex tablet:w-full tablet:p-0 mobile:p-2 smtablet:w-1/2 tablet:flex smtablet:inline-flex !items-stretch !justify-start gap-3 cursor-pointer mb-3 hover:bg-gray-200 duration-300 ease-in-out'>
                <div className='w-1/3 border rounded-md'><picture><img className='w-full block' src='./images/product/p6.jpg' alt='country'/></picture></div>
                <div>
                  <h4 className='p !font-semibold !text-sm'>T-shirt for men</h4>
                  <p className='p text-HalfColor pt-1'>$40.00</p>
                </div>
              </div>
              {/* highlight product end*/}
              {/* highlight product start*/}
              <div className='c-flex tablet:w-full tablet:p-0 mobile:p-2 smtablet:w-1/2 tablet:flex smtablet:inline-flex !items-stretch !justify-start gap-3 cursor-pointer mb-3 hover:bg-gray-200 duration-300 ease-in-out'>
                <div className='w-1/3  border rounded-md'><picture><img className='w-full block' src='./images/product/p7.jpg' alt='country'/></picture></div>
                <div>
                  <h4 className='p !font-semibold !text-sm '>Vission LED new brand TV</h4>
                  <p className='p text-HalfColor pt-1'>$340.00</p>
                </div>
              </div>
              {/* highlight product end*/}
             
            </div>
          </div>
        {/* description end */}
      </div>
      {/* product image details show  end*/}
    </>
  )
}
