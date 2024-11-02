import React from 'react'
import { Hero } from '../components/Hero/Hero'
import { Popular } from '../components/popular/popular'
import { Offers } from '../components/Offers/Offers'
import { Newcollection } from '../components/NewCollections/Newcollection'
import { Newsletter } from '../components/NewsLetter/Newsletter'

export const Shop = () => {
  return (
    <div>
      <div><Hero/></div>
      <div><Popular/></div>
      <div><Offers/></div>
      <div><Newcollection/></div>
      <div><Newsletter/></div>
    </div>
  
  )
}
