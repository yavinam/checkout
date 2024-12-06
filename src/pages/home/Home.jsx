import React, { useEffect, useState } from 'react'
import Hero from '../../components/hero/Hero'
import { useStateValue } from '../../context'
import Products from '../../components/products/Products'
import axios from '../../api'

const Home = () => {
  const {count} = useStateValue()
  const [data, setData] = useState(null)

  useEffect(()=>{
    axios
      .get("/products")
      .then(res=> setData(res?.data))
  }, [])

  return (
    <div id='home'>
      <Products title="Products" data={data?.products}/>
    </div>
  )
}

export default Home

