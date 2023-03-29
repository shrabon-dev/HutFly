import React from 'react'
import Breadcrumb from '../components/breadcrumb'
import Cart from '../components/cart'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import SaveForLater from '../components/saveForLater'
import SuperDiscount from '../components/superDiscount'

export default function CartPage() {
  return (
    <>
        <Navbar/>
        <Breadcrumb currentPage="My Cart"/>
        <Cart/>
        <SaveForLater/>
        <SuperDiscount/>
        <Footer/>
    </>
  )
}
