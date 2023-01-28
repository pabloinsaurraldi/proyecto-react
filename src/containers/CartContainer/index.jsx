import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Shop } from "../../context/ShopProvider";
import TableRow from "./TableRow";

const Cart = () => {
  const { productos, totalAPagar } = useContext(Shop);

  return (
    <>
      {productos.length > 0 ? (
        <>
          <div className="posicion">
            <table className="table table-dark table-striped todaLaTabla table-hover">
              <thead>
                <tr>
                  <th scope="col">Imagen</th>
                  <th scope="col">Producto</th>
                  <th scope="col">Modelo</th>
                  <th scope="col">Cantidad</th>
                  <th scope="col">Precio</th>
                  <th scope="col">Eliminar</th>
                </tr>
              </thead>

              <tbody>
                {productos.map((producto) => {
                  return <TableRow key={producto.id} producto={producto} />;
                })}
              </tbody>
            </table>
          </div>
          :
          <div className="posicion2">
            <h2>Total</h2>
            <h3>$ {totalAPagar()} </h3>
          </div>
          <div className="posicionBoton">
            <button className="finOperacion">Confirmar compra</button>
          </div>
        </>
      ) : (
        <>
        <div className="carritoVacio">
          <h1>Ningun Producto por aca!!!</h1>
          <img src="https://media.tenor.com/_BiwWBWhYucAAAAM/what-huh.gif" alt="gif" />
          <h1>Utiliza el siguiente enlace para volver a ver nuestros productos</h1>
          <Link to="/"><button className="finOperacion">Inicio</button></Link>
        </div>
        </>
      )}
    </>
  );
};

export default Cart;
