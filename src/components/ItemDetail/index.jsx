import React from 'react';
import '../ItemDetail/styles.scss'
import Cantidad from '../Conteo';

const ItemDetail = ({ detail }) => {

    return ( 
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-4 imagenProducto">
                    <img src= {detail.imgSrc} class="img-fluid rounded-start" alt="" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h3 className="card-title"> {detail.categoria} </h3>
                        <h5 className="card-title"> {detail.modelo} </h5>
                        <p className="card-text"> {detail.detalle} </p>
                             <div className='precios'>
                                <div className='containerEfectivo'>
                                    <h5 className="card-text efectivo">Efectivo </h5>
                                    <h5 className='efectivo'>${detail.precio}</h5>
                                 </div>
                                <hr />
                                <div className='containerLista'>
                                    <h5 className="card-text efectivo">Precio de Lista </h5>
                                    <h5 className='efectivo'>${detail.precioLista}</h5>
                                    <div className='imagenesPreciosLista'>
                                        <img className='imgCuotas' src="https://seeklogo.com/images/A/ahora-12-logo-857EC0D625-seeklogo.com.png" alt="logoAhora12" />
                                        <img className='imgCuotas2' src="https://s03.s3c.es/imag/_v0/487x453/2/5/a/mercado-pago.png" alt="logoMp" />
                                    </div>
                                    <div className='cantidadContainer'>
                                        <Cantidad />
                                    </div>
                                 </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
       
    
            
    )
}

export default ItemDetail