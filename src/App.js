import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/Login/SignUp/Login';
import ProductDetails from './Components/Product.jsx/ProductDetails';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import AuthProvider from './Components/Security/AuthContext';
import Signup from './Components/Login/SignUp/Signup';
import Pagenotfound from './Components/Pagenotfound';
import Cart from './Components/ShoppingCart/Cart';

function App() {
  return (
    <div className="App">
    <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/product' element={<ProductDetails/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='*' element={<Pagenotfound/>}/>
            <Route path='/carts' element={<Cart/>}/>
          </Routes>
        </BrowserRouter> 
      </AuthProvider>
    </div>
  );
}

export default App;
