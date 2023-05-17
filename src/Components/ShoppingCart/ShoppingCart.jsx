import React from 'react';
import './ShoppingCart.css';
import {FaTimes} from 'react-icons/fa';
import {RiDeleteBin6Line}  from 'react-icons/ri';
function ShoppingCart({
     visibility,
     products,
     onProductRemove,
     onClose,
     onQuantityChange
})
{
      return (
        <div className="modal" style={{
            display: visibility ? "flex" : "none"
        }}>
        
            <div className="shoppingCart">
     
                  <div className="shoppingCart-header">
                        <h2>Shopping Cart</h2>
                        <button 
                        className="close-btn"
                        onClick={onClose}
                        >
                            <FaTimes size={30}/>
                        </button>
                  </div>
                  <div className="cart-products">
                      {
                        products.length === 0 && (
                             <span className="empty-text">
                                   Your basket is currently
                             </span>
                        )
                      }
                      {
                          products.map((product)=>(
                             <div className="cart-product" key={product.id}>
                                      <div className="image">
                                           <img src={product.image} alt={product.name}/>
                                      </div>
                                      <div className="product-info">
                                           <h3>
                                            {product.name}
                                           </h3>
                                           <span className="product-price">
                                               {product.price * product.count} triệu đồng
                                           </span>
                                      </div>
                                      <select 
                                      className="count"
                                      value={product.count}
                                      onChange={(event)=>{
                                         onQuantityChange (
                                            product.id,
                                            event.target.value,
                                           
                                         )
                                      }}
                                      > 
                                      {
                                          [
                                            ...Array(
                                                10
                                            ).keys(),
                                          ].map(number => {
                                            const num = number + 1;
                                            return <option value={num} key={num}>{num}</option>
                                          })
                                      }
                                      </select>
                                      <button 
                                      className="remove-btn"
                                      onClick={()=>onProductRemove(product)}
                                      >
                                       <RiDeleteBin6Line/>
                                      </button>
                             </div>
                          )

                          )
                      }
                  </div>
            </div>

        </div>
      )

}
export default ShoppingCart;