import React, {useEffect,useState} from 'react';
import './Menu.css';

function Form(props
    
){
  const [cars,setCars] = useState([]);
  const fetchCarData = () => {
     fetch(props.url)
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
    const [addProducts,setAddProducts] = useState( 
        JSON.parse(
            localStorage.getItem(
               "Car-cart"
          )
    ) || []);
        useEffect(()=> {
            localStorage.setItem(
              "Car-cart",
              JSON.stringify(addProducts)
            )
        },[addProducts])
     const addProductToCart = (product) => {
              const newProduct = {
                  ...product,
                  count:1,
              }
              setAddProducts([
                ...addProducts,
                newProduct,
              ])
          
              
     }
    
     return(
        <div>
        {
            cars.length > 0 && (
                   
          
                   <div className="container">
                   <h2>{props.name}</h2>
                   <div className="menu-box">
                   { 
                       cars.map(car=> (
                          
                           <div className="box" key={car.id}>
                                 <div className="image">
                                     <img src={car.image} alt={car.name}></img>
                                 </div>
                                 <div class="content">
                                     <h3>{car.name}</h3>
                                     <p>{car.price}</p>
                                 </div>
                                 <div className="btn">
                                      <button className="btn-detail">Detail</button>
                                      <button 
                                      className="btn-order"
                                        onClick={
                                            () => 
                                                addProductToCart(car)
                                                 
                                               
                                            
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
     )   
}
export default Form;