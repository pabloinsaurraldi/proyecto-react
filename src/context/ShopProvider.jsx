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

    const descontarStock = () => {
        let inventario = 0
        for (const producto of productos) {
            inventario = producto.quantity =- producto.stock
        }
        console.log(inventario);
        return inventario
    }

    const totalAPagar = () => {
        let total = 0
        for (const producto of productos) {
            total += producto.precio * producto.quantity
        }
        return total
    }

    const eliminarProducto = (id) => {
        const productosfiltrados = productos.filter(producto => producto.id !== id)
        setProductos(productosfiltrados)
    }

    const vaciarCarrito = () => {
        setProductos([])
    }

    return (
        <Shop.Provider value = {{productos, agregaProducto, totalDelCarrito, totalAPagar, eliminarProducto, descontarStock, vaciarCarrito}}>
            {children}
        </Shop.Provider>
    )
}

export default ShopProvider