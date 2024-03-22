
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp';
import PrivateComponents from './components/PrivateComponents';
import Login from './components/Login';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';
import UpdateProduct from './components/UpdateProduct';
import Profile from './components/Profile';
function App() {
  return (
    <>
    <BrowserRouter> 
    <Navbar/>
    <Routes> 

    <Route element={<PrivateComponents/>}> 
    <Route path="/" element={<h1> Home</h1>} />
    <Route path="/products" element={<ProductList/>} />
    <Route path="/addproducts" element={<AddProduct/>} />
    <Route path="/updateproducts/:id" element={<UpdateProduct/>} />
    <Route path="/profile" element={<Profile/>} />
    <Route path="/logout" element={<h1> logOut</h1>} />
    </Route>
    <Route path="/signup" element={<SignUp/>} />
    <Route path="/login" element={<Login/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
