import Header from './components/Header';
import ProductsList from './components/ProductsList';
import ProductDetails from './components/ProductDetails'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <ProductsList/>
      <ProductDetails/>
    </div>
  );
}

export default App;
