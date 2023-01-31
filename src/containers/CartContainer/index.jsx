import React from "react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Shop } from "../../context/ShopProvider";
import generacionDeOrden from "../../services/generacionOrden";
import Formulario from "../../components/FormComp";
import TableRow from "./TableRow";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { doc, updateDoc } from "firebase/firestore";

const Cart = () => {
  const { productos, totalAPagar, vaciarCarrito } = useContext(Shop);

  const [form, setForm] = useState(false);

  const confirmarCompra = async () => {

    const orden = generacionDeOrden({
      //cargar los datos de generaciondeorden
      nombre: "ficoseco",
      email: "ficoseco@gmail.com",
      telefono: 123456898,
      cart: productos,
      total: totalAPagar(),
    });

    const docRef = await addDoc(collection(db, "ordenes"), orden);
    vaciarCarrito();

    for (const productosEnCarrito of productos) {
      const productoRef = doc(db, "componentes", productosEnCarrito.id)
    
    await updateDoc (productoRef, {
      stock: productosEnCarrito.stock - productosEnCarrito.quantity
    })
    }

    alert("Se confirmo la orden con el siguiente codigo ID: " + docRef.id);
    setForm(false)
  };

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
         
            <button onClick={() => setForm(true)} className="finOperacion">
              Comprar
            </button>
        </>
      ) : (
        <>
          <div className="carritoVacio">
            <h1>Ningun Producto por aca!!!</h1>
            <img
              src="https://media.tenor.com/_BiwWBWhYucAAAAM/what-huh.gif"
              alt="gif"
            />
            <h1>
              Utiliza el siguiente enlace para volver a ver nuestros productos
            </h1>
            <Link to="/">
              <button className="finOperacion">Inicio</button>
            </Link>
          </div>
        </>
      )}
      {form ? (
        <Formulario
          confirmarCompra={confirmarCompra}
          form={form}
          setForm={setForm}
        />
      ) : null}
    </>
  );
};

export default Cart;
