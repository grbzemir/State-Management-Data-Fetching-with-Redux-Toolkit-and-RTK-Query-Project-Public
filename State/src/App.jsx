import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Counter from './components/Counter';
import AllProducts from './components/AllProducts';
import SpecificProduct from './components/SpecificProduct';
import AddNewProduct from './components/AddNewProduct';
import UpdateProduct from './components/UpdateProduct';
import DeleteProduct from './components/DeleteProduct';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Tüm ürünlerin listelendiği sayfa */}
        <Route path="/" element={<AllProducts />} />

        {/* Belirli bir ürünün gösterildiği sayfa */}
        <Route path="/product" element={<SpecificProduct />} />

        {/* Yeni ürün ekleme sayfası */}
        <Route path="/add" element={<AddNewProduct />} />

        {/* Ürün güncelleme sayfası */}
        <Route path="/update/:productId" element={<UpdateProduct productId={5} />} />

        {/* Ürün silme işlemi */}
        <Route path="/delete/:productId" element={<DeleteProduct productId={5} />} />

        {/* Sayaç bileşeni için test rotası (opsiyonel) */}
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </Router>
  );
};

export default App;
