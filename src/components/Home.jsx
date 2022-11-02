import React from 'react'
import './css/Home.css'
import { useGetAllProductsQuery } from '../features/productsApi'
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cartSlice';
import { useNavigate } from "react-router-dom"
import Sections from './Sections'

const Home = () => {

  const { data = [], error, isLoading } = useGetAllProductsQuery();

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleAddToCart = (product) => {
    dispatch(addToCart(product))
    
  }
  
  const filtered = (data.filter(({ id }) => id % 2))


  return (
    <div className="home-container">
  <Sections/>
        <h2 className='arrivals'>Produtos em destaque</h2>
      <div className="products">
        {filtered &&
          filtered?.map((product) => (
            <div key={product.id} className="product">
              <h3>{product.name}</h3>
              <img src={product.image} alt={product.name} />
              <div className="details">
                <span>{product.desc}</span>
                <span className="price">${product.price}</span>
              </div>
              <button onClick={() => handleAddToCart(product)}>
                Adicionar ao carrinho
              </button>
            </div>
          ))}
      </div>
    </div>

  )
}

export default Home
