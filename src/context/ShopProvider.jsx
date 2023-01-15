import React, { useState } from 'react'
import { createContext } from 'react'   

export const Shop = createContext()

const ShopProvider = ({ children }) => {

    const [productos, setProductos] = useState([])

    let agregaProducto = (producto) => {
        setProductos([...productos, producto])
    }  

    const totalDelCarrito = () => {
        let cantidadTotal = 0
        for (const producto of productos) {
            cantidadTotal += producto.quantity
        }
        return cantidadTotal
    }

    return (
        <Shop.Provider value = {{productos, agregaProducto, totalDelCarrito}}>
            {children}
        </Shop.Provider>
    )
}

export default ShopProvider