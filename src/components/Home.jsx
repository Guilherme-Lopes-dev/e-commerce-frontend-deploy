import React from 'react'
import './css/Home.css'
import { useGetAllProductsQuery } from '../features/productsApi'
import Sections from './Sections'
import NewProducts from './products/NewProducts';
import Loading from '../components/Loading';

const Home = () => {

  const { data, error, isLoading } = useGetAllProductsQuery();
  
  return (
    <div className="home-container">
      <Sections />
      <h2 className='arrivals'>Produtos em destaque</h2>
      {isLoading ?  <Loading/> : <NewProducts />}
    </div>

  )
}

export default Home
