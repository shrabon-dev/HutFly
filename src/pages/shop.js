import React from 'react'
import Breadcrumb from '../components/breadcrumb'
import Navbar from '../components/navbar'
import ShopProduct from '../components/shopProduct'
import Footer from '../components/footer'

export default function ShopPage() {
  return (
    <>
        <Navbar/>
        <Breadcrumb/>
        <ShopProduct/>
        <Footer/>
    </>
  )
}
