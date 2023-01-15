import React from 'react'
import { useContext } from 'react'
import { Shop } from '../../context/ShopProvider'
import '../CartWidget/styles.scss'

const CartWidget = () => {

  const {totalDelCarrito} = useContext(Shop)

  return (
    <>
      <div className='containerCarrito'>
        <a href="/#"> <img className='carrito' src="https://cdn-icons-png.flaticon.com/512/46/46297.png?w=360" alt="imgCart" /></a>
        <p className='nroCarrito'> {totalDelCarrito()} </p>
      </div>
    </>
  )
}

export default CartWidget