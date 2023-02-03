import React from 'react';
import '../NavBar/styles.scss';
import '../Item/styles.scss'
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget';


const NavBar = () => {
  return (
   <nav className="navbar navbar-expand-lg colorNavBar">
  <div className="container-fluid">
    <a className="navbar-brand  controlPadding" href="/#"><img src="" alt="" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 posicionEnlaces">
        <li className="nav-item">
          <Link to="/"><img className='logoVerzall' src="https://res.cloudinary.com/dkn0guenm/image/upload/v1669063610/verzall/img/logo/logoMasChico_-_copia_-_copia_dqvqqb.jpg" alt="LogoVerzall" /></Link>
        </li>

          <li className="nav-item dropdown colorEnlaces">
          <span className="dropdown-toggle colorEnlaces" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categorias
          </span>
          <ul className="dropdown-menu">
            <li><Link to= "/categoria/Motherboard" className="dropdown-item">Motherboards</Link></li>
            <li><Link to= "/categoria/Procesadores" className="dropdown-item">Procesadores</Link></li>
            <li><Link to= "/categoria/Fuentes" className="dropdown-item">Fuentes</Link></li>
            <li><Link to= "/categoria/Memorias Ram" className="dropdown-item">Memorias Ram</Link></li>
            <li><Link to= "/categoria/Almacenamiento" className="dropdown-item">Almacenamiento</Link></li>
            <li><Link to= "/categoria/Placas de video" className="dropdown-item">Placas de video</Link></li>
            <li><Link to= "/categoria/Auriculares" className="dropdown-item">Auriculares</Link></li>
            <li><Link to= "/categoria/Mouse" className="dropdown-item">Mouse</Link></li>
            <li><Link to= "/categoria/Teclados" className="dropdown-item">Teclados</Link></li>
          </ul>
        </li>
    
       
      </ul>
    </div>
  </div>
  <div>
    <CartWidget/>
  </div>
</nav>
  )
}

export default NavBar