import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Mainpage from './pages/Mainpage';
import NotFound from './pages/NotFound';
import Product from './pages/Product';
import ProductDetail from './pages/ProductDetail';
import Header from './components/Header';
import './styles/Common.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const res = await axios.get(
        'https://jsonplaceholder.typicode.com/comments'
      );
      setProducts(res.data.slice(0, 10));
    };

    getProducts();
  }, []);

  return <div className="App">
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Mainpage />}></Route>
        <Route path='/product' element={<Product products={products} />}></Route>
        <Route path='/product/:productId' element={<ProductDetail products={products} />}></Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  </div>;
}

export default App;