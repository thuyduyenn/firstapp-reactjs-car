import React, {useEffect,useState} from 'react';
import Form from './FormMenu';
import './Menu.css';
function Menu(
    
){
   
     const nameApi  = [
        'Audi',
        'BMW',
        'Mercedes',
        "Toyota"
     ]
    return (
        <>
               <div className="menu-container" id="menu">
                <h1>our <span> Menu</span></h1>
               
    
                <Form 

                url="http://localhost:3004/Audi" 
                name="Audi"
            
                />
                <Form 
                url="http://localhost:3004/BMW" 
                name="BMW"
               
                />
                <Form 
                url="http://localhost:3004/Mercedes" 
                name="Mercedes"
            
                />
                <Form 
                url="http://localhost:3004/Toyota" 
                name="Toyota"
               />
         
                </div>
        </>
    )
     
     
       
  
 


}
export default Menu;