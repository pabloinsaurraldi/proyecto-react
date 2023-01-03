import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/containers/ItemListContainer'
import Cantidad from './components/conteo/index'

function App() {
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer />
      <Cantidad />
    </div>
  );
}

export default App;
