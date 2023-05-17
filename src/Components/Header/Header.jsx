import React, {useState,useEffect} from 'react';
import { AiOutlineSearch,AiOutlineMenu } from 'react-icons/ai';
import {FaTimes} from 'react-icons/fa';
import {BrowserRouter as Router,Route,Routes,Link} from 'react-router-dom';
import {FiShoppingCart} from 'react-icons/fi'

import './Header.css';

function Header({
   onOpen,
   dataLength,
   comeBack,
   data,
   detailSearch,
   setUl
}
) {
   const [toggle,setToggle] = useState(false);
   const ToggleMenu = () => {
         setToggle(toggle?false:true)
      // tương đương setToggle(!toggle)
          
    
        
   } 
   const [active,setActive] = useState(true);
   const [query,setQuery] = useState("");
   const [dataSearch, setDataSearch] = useState([]);
   const keys = ['name','image']
  
   useEffect(()=>{
      const search = (data) => {
         return data.filter(user => 
                keys.some((key)=>user[key].toLowerCase().includes(query))
       ) }
        const dataSearch = search(data)
        setDataSearch([
              ...dataSearch
        ])
   },[query])
  const Hide = ()=> {
     setActive(!active)
      
  }
  
    return (
         <div className="header">
               <a href="#home" className="logo" onClick={()=>
                   comeBack()
               }

               >Lttd</a>

               <nav className={toggle? "nav-menu-toggle":"nav-menu"}
              onClick={()=> setToggle(false)} 
               >
            
                  <ul>
                            <a href="#home" onClick={()=>setUl()}><li>Home</li></a>
                            <a href="#menu" onClick={()=>setUl()}><li>Menu</li></a>
                            <a href="#about" onClick={()=>setUl()}><li>About us</li></a>
                             <a href="#contact" onClick={()=>setUl()}><li>Contact</li></a>
                  </ul>
          
               </nav>
               <div className="menu-icon">
                  <button className="btn-menu" onClick={ToggleMenu}>
                     {
                        toggle? (<FaTimes/>
                        
                        ) : (
                           <AiOutlineMenu/>
                        )
                     }
                  </button>
                  <div className="list-menu">
                       <a  onClick={()=> setActive(!active)}><AiOutlineSearch/></a>
                       <button onClick={()=>
                             onOpen()
                       }><FiShoppingCart/></button>{
                           <div className="circle">{dataLength.length}</div>
                       }
             

                  </div>
               </div>
               <form className={ active? "" : "active"} id="search"
               
               >
                        <div className="search-container">
                        <div className="search-input">
                        <input 
                           type="search" 
                           placeholder="Nhập loại xe....." 
                           id="search"
                           onChange={
                              (e)=>
                              setQuery(e.target.value)
                           }
                           onBlur={Hide}
                           ></input>

                        </div>
  
                           <div className="render-dataSearch">
                                <div className="render-dataSearch-container">
                                {
                                 dataSearch.length === 0 && 
                                 (<h4>Không tìm thấy kết quả tìm kiếm</h4>)
                                }
                                {
                                          dataSearch.map((item)=> (
                                             <div className="render-dataSearch-box" onClick={
                                                ()=> {
                                                   Hide();
                                                   detailSearch(item);
                                                  
                                                }
                                             
                                                
                                                
                                                
                                             }
                                             key={item.id}>
                                                  <img src={item.image} alt=""/>
                                             </div>
                                          )) 
                                }
                                  

   
                                  
                                </div>
                           </div>
                        </div>
                        
               </form>
               
         </div>

  )
}




export default Header;
