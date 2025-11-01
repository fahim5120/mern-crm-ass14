import React, { useEffect, useState } from 'react'
import Cards from '../../components/user/Cards'
import { axiosInstance } from '../../axios/axiosinstance'
import { listProducts } from '../../services/userServices'


const Products = () => {
  const [products,setProducts]=useState([])
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await listProducts()
        console.log(res)
        setProducts(res.data)
      } catch (err) {
        console.error(err)
      }
    }

    fetchProducts();
  }, [])
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>

      {
        products && products.map((product,index)=>(
              <Cards key={index} product={product}/>
        ))
      }
     
     
    </div>
  )
}

export default Products