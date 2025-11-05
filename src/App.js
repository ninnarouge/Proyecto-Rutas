import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePrincipal from './pages/home';
import ProductosPrincipal from './pages/products';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePrincipal/>}></Route>
        <Route path='/products' element={<ProductosPrincipal/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
