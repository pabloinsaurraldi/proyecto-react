import React from 'react'
import '../footer/styles.scss'

const Footer = () => {
  return (
     <div class="todoElFooter">
            <div class="redesSociales">
                <a href="https://www.instagram.com/"><img class="logoInsta" src="https://res.cloudinary.com/dkn0guenm/image/upload/v1662572533/verzall/img/instagram_p7vy2r.png" alt="logoInstagram" />
                </a>
                <a href="https://es-la.facebook.com/"><img class="logoFace" src="https://res.cloudinary.com/dkn0guenm/image/upload/v1662572555/verzall/img/facebook_w0eu8t.png" alt="logoFacebook" />
                </a>
                <a href="https://web.whatsapp.com/"><img class="logoWsp" src="https://res.cloudinary.com/dkn0guenm/image/upload/v1662572554/verzall/img/whatsapp_wxysx2.png" alt="logoWsp" />
                </a>
            </div>
            <div class="textoFooter">
                <p class="parrafoDeCopy">
                    Verzall © Copyright 2019. Todos los derechos reservados.
                </p>
            </div>
        </div>
  )
}

export default Footer