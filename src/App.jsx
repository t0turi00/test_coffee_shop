import './App.css'
import Header from './components/header'
import Navbar from './components/navbar'
import Footer from './components/footer.jsx'
import React, { useState } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home.jsx'
import Login from './pages/login.jsx'
import Cart from './pages/cart.jsx'
import Register from './pages/register.jsx'
import Story from './pages/story.jsx'
import ScrollToTop from './components/scrolltotop.jsx'
import Employees from './pages/employees.jsx'
import Contact from './pages/contact.jsx'
import Menu from './pages/Menu.jsx';

function App() {
  const [ cart, setCart ] = useState([]);
  const [ warning, setWarning ] = useState(false);
  const [ itemPresent, setItemPresent ] = useState("");

  function handleClick(item) {
    let isPresent = false;
    cart.forEach((product) => {
      if(item.id === product.id){
        isPresent = true;
        setItemPresent(item.title);
      }
    })
    /*setWarning(true);
      setTimeout(()=>{
        setWarning(false);
      }, 2500);*/
    if(isPresent){
      setCart([...cart, item]); 
      handleChange(item, +1);
    }else{
    setCart([...cart, item]);
    }
  }

  const handleChange = (item, d) =>{
    let ind = -1;
    cart.forEach((data, index) => {
      if (data.id === item.id){
        ind = index;
      }
    });
    const tempArr = cart;
    tempArr[ind].amount += d;
    
    if (tempArr[ind].amount === 0){
      tempArr[ind].amount = 1;
    }
    setCart([...tempArr])
  }


  return (
    <div className="App">
      <HashRouter>
      <ScrollToTop />
      <Header cart={cart}/>
      <Navbar />
      {/*warning && <div className='warning'>{itemPresent} added to your cart</div>*/}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account/login" element={<Login />} />
        <Route path="/account/register" element={<Register />} />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} handleChange={handleChange}/>}/>
        <Route path="/menu" element={<Menu handleClick={handleClick}/>} />
        <Route path="/story" element={<Story />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      </HashRouter>
     </div>
     
  )
}

export default App
