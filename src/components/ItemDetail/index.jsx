import "../ItemDetail/styles.scss";
import Cantidad from "../ItemCount";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Shop } from "../../context/ShopProvider";

const ItemDetail = ({ detail }) => {
  const [quantity, setQuantity] = useState(0);

  const { agregaProducto } = useContext(Shop);

  const onAdd = (cantidad) => {
    setQuantity(cantidad);
    agregaProducto({ ...detail, quantity: cantidad });
  };

  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4 imagenProducto">
          <img src={detail.imgSrc} className="img-fluid rounded-start" alt="" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h3 className="card-title"> {detail.categoria} </h3>
            <h5 className="card-title"> {detail.modelo} </h5>
            <p className="card-text"> {detail.detalle} </p>
            <div className="precios">
              <div className="containerEfectivo">
                <h5 className="card-text efectivo">Efectivo </h5>
                <h5 className="efectivo">${detail.precio}</h5>

                <img
                  className="imgCuotas"
                  src="https://seeklogo.com/images/A/ahora-12-logo-857EC0D625-seeklogo.com.png"
                  alt="logoAhora12"
                />
                <img
                  className="imgCuotas2"
                  src="https://s03.s3c.es/imag/_v0/487x453/2/5/a/mercado-pago.png"
                  alt="logoMp"
                />
              </div>
              <div className="cantidadContainer">
                {quantity === 0 ? (
                  <Cantidad onAdd={onAdd} stock={detail.stock} />
                ) : (
                  <div className="posicion3">
                    <button className="finOperacion">
                      <Link to="/carrito">Ir al carrito</Link>
                    </button>
                    <Link to="/">
                      <button className="finOperacion">Seguir comprando</button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
