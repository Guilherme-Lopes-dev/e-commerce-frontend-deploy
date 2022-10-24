import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from './components/Home';
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import Notebooks from './components/products/Notebooks';
import Phones from './components/products/Phones'
import Acessories from './components/products/Acessories'
import NotFound from './components/NotFound'
import Footer from './components/Footer';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Checkout from './components/Checkout';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />
        <NavBar />
        <Routes>
          <Route path='/cart' exact element={<Cart />} />
          <Route path='/notebooks' exact element={<Notebooks />} />
          <Route path='/phones' exact element={<Phones />} />
          <Route path='/acessories' exact element={<Acessories />} />
          <Route path='/checkout' exact element={<Checkout />} />
          <Route path='/not-found' exact element={<NotFound />} />
          <Route path='/' exact element={<Home />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
