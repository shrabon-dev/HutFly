import React from 'react'
import AddtoCard from '../components/addtocard'
import Breadcrumb from '../components/breadcrumb'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import RelatedProduct from '../components/relatedProduct'
import SuperDiscount from '../components/superDiscount'

export default function AddToCardPages() {
  return (
    <>
      <Navbar/>
      <Breadcrumb currentPage="Add-to-card"/>
      <AddtoCard/>
      <RelatedProduct/>
      <SuperDiscount/>
      <Footer/>

    </>
  )
}
