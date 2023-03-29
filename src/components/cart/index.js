import React from 'react'
import CartPart from '../part/cartPart'
import { BsArrowLeft } from 'react-icons/bs'
import { AiFillLock } from 'react-icons/ai'
import { MdSupportAgent } from 'react-icons/md'
import { GrDeliver } from 'react-icons/gr'


export default function Cart() {
  return (
    <>
        <div className='container py-10'>
            <h6 className='p !text-2xl !font-bold text-text mb-6'>My Cart (56)</h6>
            <div className='tablet:c-flex !items-stretch'>
                <div className='tablet:w-3/4 mobile:w-full border rounded-md'>                   
                    <CartPart img="./images/product/p2.png" name="Dell Brand New laptop M20" total="$400.00" qty="9" color="red" size="medium" saller="ATM GT" material="plastic"/>
                    <CartPart img="./images/product/p2.png" name="Dell Brand New laptop M20" total="$400.00" qty="9" color="red" size="medium" saller="ATM GT" material="plastic"/>
                    <CartPart img="./images/product/p2.png" name="Dell Brand New laptop M20" total="$400.00" qty="9" color="red" size="medium" saller="ATM GT" material="plastic"/>
                    <CartPart img="./images/product/p2.png" name="Dell Brand New laptop M20" total="$400.00" qty="9" color="red" size="medium" saller="ATM GT" material="plastic"/>
                    <CartPart img="./images/product/p2.png" name="Dell Brand New laptop M20" total="$400.00" qty="9" color="red" size="medium" saller="ATM GT" material="plastic"/>
                 <div className="c-flex px-3 py-5">
                 <button className='p text-white bg-main tablet:!text-base mobile:text-xs border rounded-md px-5 py-2 hover:bg-white hover:text-main duration-300 ease-in-out'><BsArrowLeft className="inline"/> Back to Shop</button>
                 <button className='p text-main bg-white tablet:!text-base mobile:text-xs border rounded-md px-5 py-2 hover:bg-main hover:text-white duration-300 ease-in-out'>Remove All</button>
                 </div>
                </div>
                <div className='tablet:w-1/4 mobile:w-full pl-5'>
                  <div className=''>
                    <div className='border p-3 rounded-md'>
                      <p className='p text-HalfColor !font-semibold pb-2'>Have a coupon?</p>
                      <div>
                        <input className='p border outline-none w-40 p-1 pl-2' type={'text'} />
                        <button className='p text-main !text-base border rounded-r-md p-1 hover:bg-main hover:text-white duration-300 ease-in-out'>Apply</button>
                      </div>
                    </div>
                  </div>
                  <div className=''>
                    <div className='border mt-5 p-3 rounded-md'>
                      <div className='border-b'>
                        <p className='p text-text !font-semibold pb-2 c-flex'><span>Subtotal :</span><span>$500.00</span></p>
                        <p className='p text-red-600 !font-semibold pb-2 c-flex'><span>Discount :</span><span>-$50.00</span></p>
                        <p className='p text-[#00B517] !font-semibold pb-2 c-flex'><span>Tax :</span><span>$20.00</span></p>
                      </div>
                      <div className=''>
                        <p className='p text-HalfColor !font-semibold py-2 c-flex'><span>Total :</span><span>$470.00</span></p>
                      </div>
                      <div className='text-center pt-5'>
                        <button className='p text-white bg-[#00B517] !text-base border rounded-md px-6 py-3 hover:bg-main hover:text-white duration-300 ease-in-out'>Checkout</button>
                        <picture>
                          <img className='w-full block mt-3' src='./images/paymentOption.png'/>
                        </picture>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
            <div className='tablet:w-3/4 mobile:w-full c-flex py-5'>
              <div className='tablet:c-flex smtablet:text-left mobile:text-center gap-3'>
                <span className='m-auto block w-10 h-10 bg-gray-300 rounded-full c-flex !justify-center text-2xl !items-center'>
                  <AiFillLock className='inline'/>
                </span>
                <span>
                  <span className='p tablet:text-sm mobile:text-xs text-text !font-medium'>Secure payment 
                    <span className='block tablet:text-sm mobile:text-xs !text-HalfColor'>Have you ever finally just </span>
                  </span>
                </span>
              </div>
              <div className='tablet:c-flex smtablet:text-left mobile:text-center tablet:gap-3'>
                <span className='m-auto block w-10 h-10 bg-gray-300 rounded-full c-flex !justify-center text-2xl !items-center'>
                  <MdSupportAgent className='inline'/>
                </span>
                <span>
                  <span className='p text-text tablet:text-sm mobile:text-xs  !font-medium'>24/7 Support
                    <span className='block !text-HalfColor tablet:text-sm mobile:text-xs'>Have you ever finally just </span>
                  </span>
                </span>
              </div>
              <div className='tablet:c-flex smtablet:text-left mobile:text-center gap-3'>
                <span className='m-auto block w-10 h-10 bg-gray-300 rounded-full c-flex !justify-center text-2xl !items-center'>
                  <GrDeliver className='inline'/>
                </span>
                <span>
                  <span className='p text-text tablet:text-sm mobile:text-xs !font-medium'>Free delivery
                    <span className='block !text-HalfColor tablet:text-sm mobile:text-xs'>Have you ever finally just </span>
                  </span>
                </span>
              </div>
            </div>
        </div>
    </>
  )
}
