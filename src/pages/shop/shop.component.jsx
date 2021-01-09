import React,{useState,useEffect} from 'react';
import SHOP_DATA from './shops.data.js';
import CollectionPreview from '../../components/preview-collection/preview-collection.component'

const ShopPage= () => {
  const [collections,setCollection]=useState(SHOP_DATA)
  return(
  <div>
   {
     collections.map(({id, ...restProps})=> (
       <CollectionPreview key={id} {...restProps} />

     ))
   }
  </div>

  )}
export default ShopPage