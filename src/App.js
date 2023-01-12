import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemDetailContainer from './containers/ItemDetailContainer'
import Carrito from './containers/Carrito'

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/categoria/:categoryId' element={<ItemListContainer />} />
        <Route path='/carrito' element={<Carrito />} />
        <Route path='/detail/:id' element={<ItemDetailContainer />} />
        <Route path='*' element={<h2>Ruta no encontrada</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
