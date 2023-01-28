import React from 'react'
import { useContext } from 'react'
import { Shop } from '../../context/ShopProvider'
import { Link } from 'react-router-dom';
import '../CartWidget/styles.scss'

const CartWidget = () => {

  const {totalDelCarrito} = useContext(Shop)

  return (
    <>
      <div className='containerCarrito'>
        <Link to= "/carrito"> <img className='carrito' src="https://cdn-icons-png.flaticon.com/512/46/46297.png?w=360" alt="imgCart" /></Link>
        <p className='nroCarrito'> {totalDelCarrito()} </p>
      </div>
    </>
  )
}

export default CartWidget