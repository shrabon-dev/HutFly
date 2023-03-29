import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddToCardPages from './pages/addtocard';
import CartPage from './pages/cart';
import { Home } from './pages/home';
import LoginPage from './pages/login';
import RegistrationPage from './pages/registration';
import ShopPage from './pages/shop';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/shop' element={<ShopPage/>}/>
          <Route path='/add-to-card' element={<AddToCardPages/>}/>
          <Route path='/cart' element={<CartPage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/register' element={<RegistrationPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
