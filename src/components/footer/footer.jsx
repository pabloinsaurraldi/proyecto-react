import React from 'react'
import { Link } from 'react-router-dom'
import '../footer/styles.scss'

const Footer = () => {
  return (
     <div className="todoElFooter">
            <div className="redesSociales">

                <Link to="https://www.instagram.com/"><img src="https://res.cloudinary.com/dkn0guenm/image/upload/v1662572533/verzall/img/instagram_p7vy2r.png" className="logoInsta" alt="logoInstagram" /></Link>
                <Link to="https://es-la.facebook.com/"><img src="https://res.cloudinary.com/dkn0guenm/image/upload/v1662572555/verzall/img/facebook_w0eu8t.png" className="logoFace" alt="logoFacebook" /></Link>
                <Link to="https://web.whatsapp.com/"><img src="https://res.cloudinary.com/dkn0guenm/image/upload/v1662572554/verzall/img/whatsapp_wxysx2.png" className="logoWsp" alt="logoWhatsapp" /></Link>

            </div>
            <div className="textoFooter">
                <p className="parrafoDeCopy">
                    Verzall © Copyright 2019. Todos los derechos reservados.
                </p>
            </div>
        </div>
  )
}

export default Footer