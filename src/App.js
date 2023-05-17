import React, {useState,useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom';

import Header from './Components/Header/Header.jsx'
import Home from './Components/Home/Home.jsx';

import About from "./Components/AboutUs/About";
import Contact from "./Components/Contact/Contact";
import ShoppingCart from './Components/ShoppingCart/ShoppingCart';
import Detail from './Components/Detail/detail'

function App() {
  const [cars,setCars] = useState([]);
  const fetchCarData = () => {
    fetch('http://localhost:3004/Car')
    .then(response=> {
      return response.json()         
    })
    .then(data=>{
        setCars(data)
    })
 }
 
    useEffect(()=> {
        fetchCarData();
    },[])

  const [visibility,setVisible] = useState(false);
  const [detail,setDetail] = useState(false);

  const [productsInCart,setProducts] = useState(
    JSON.parse(
           localStorage.getItem("Car-cart")
    ) || []
  );
  useEffect(()=> {
        localStorage.setItem("Car-cart",
        JSON.stringify(productsInCart)
        )
  },[productsInCart])
  // const [shoppingCartLength,setShoppingCartLength] = useState();
  //  const productsInCartLength = productsInCart? productsInCart.length : 0;
  //  useEffect(()=> {
  //       setShoppingCartLength(productsInCartLength)
  //  },[productsInCartLength])
     const onOpen = () => {
          setVisible(!visibility)
     }
     const addProductToCart = (product) => {
                const tt = productsInCart.findIndex((item)=>
                      item.id === product.id
                 )
                 if(tt !== -1){
                      alert("Sản phẩm đã có trong giỏ hàng");
                      setVisible(!visibility)
                      return
                 }
               const newProduct = {
                  ...product,
                  count:1,
               }
               setProducts([
                 ...productsInCart,
                 newProduct
               ])
               
     }
   const onQuantityChange = (
        productId,
        count,
        
   ) => {
 
      setProducts((oldState)=> {
            const productIndex = oldState.findIndex(
              (item) => item.id === productId
            )
            if(productIndex !== -1){
              oldState[productIndex].count = count
            }
            return [...oldState]
      })
   }
   const onProductRemove = (
        product
   ) => {
    setProducts((oldState) => {
         const productIndex = oldState.findIndex(
          (item)=> item.id === product.id
         )   
        if(productIndex !== -1){
          oldState.splice(productIndex,1)
        }
        return [...oldState]
    })
   }
   const [detailProduct,setDetailProduct] = useState([]);
   const addDetailProduct = (product) => {
    setDetailProduct(product);
    setDetail(!detail);
   }
   
const comeBack = () => {
  setDetail(false)
}

const detailSearch = (item)=> {
  setDetailProduct(item)
  setDetail(true)
}
const dataDetailFromDetail = (item) => {
     setDetailProduct(item)
}

const setUl = () => {
  setDetail(false)
}
     
    
   
       
    
     
   
     
  return (
    <div className="App">
           <Header 
           onOpen={
              onOpen

           }
           dataLength={productsInCart}
           comeBack={
            comeBack
           }
           data={cars}
           detailSearch={
            detailSearch
           }
           setUl={
            setUl
           }
            />
           <Home 
            detail={detail}
           />
           <div   style={{
      display: detail ?"none" : "flex"
      }}>
           <div className="menu-container" id="menu">
                <h1>our <span> Menu</span></h1>
        {
            cars.length > 0 && (
                   
          
                   <div className="container">
             
                   <div className="menu-box">
                   {
                       cars.map(car=> (
                          
                           <div className="box" key={car.id}>
                                 <div className="image">
                                     <img src={car.image} alt={car.name}></img>
                                 </div>
                                 <div className="content">
                                     <h3>{car.name}</h3>
                                     <p>{car.price}</p>
                                 </div>
                                 <div className="btn">
                                      <button 
                                      className="btn-detail"
                                      onClick={
                                        ()=> addDetailProduct(car)
                                      }
                                      >Detail</button>
                                      <button 
                                      className="btn-order"
                                         onClick={
                                          ()=> addProductToCart(car)
                                         }    
                                      >Order now</button>
                                 </div>
                           </div>
                         
                       ) )
                   }
                 </div>
                 </div>
                 
            )
       }
       </div>
 
      
       </div>
           <About
            detail={detail}
           />
           <Contact
            detail={detail}
           />
           <ShoppingCart
            visibility={visibility}
            products={productsInCart}
            onClose={()=> 
              setVisible(!visibility)
            }
            onQuantityChange={
              onQuantityChange
            }
            onProductRemove={
              onProductRemove
            }
            detail={detail}
           />
           <Detail 
          listProduct={cars}
          detail={detail}
          detailProduct={detailProduct}
          dataDetailFromDetail={
            dataDetailFromDetail
          }


         />
           
          
    </div>
  )
   

}

export default App;
