import React from 'react';
import './detail.css';
function Detail({ 
    listProduct,
    detail,
    detailProduct,
    dataDetailFromDetail

 }){
    // const pageAccessedByReload = (
    //     (window.performance.navigation && window.performance.navigation.type === 1) ||
    //       window.performance
    //         .getEntriesByType('navigation')
    //         .map((nav) => nav.type)
    //         .includes('reload')
    //   );
      
    // if(pageAccessedByReload === true){
         
    // }
     return (
        <div className="detail" style={{
            display: detail ? 'flex' : "none"
        }} >
        
              <div className="top-detail">
                
             {
                (
                    <div className="top-box-detail" >
                        <div className="top-image">
                            <img src={detailProduct.image}/>
                        </div>
                        <div className="content">
                            <h1>{detailProduct.name}</h1>
                            <p>{detailProduct.price}</p>
                        </div>
                    </div>
                )
             }
            </div>
              <div className="bottom-detail">
                   <h1>Xem thêm</h1>
                    <div className="bottom-box-detail">
                    {
                        listProduct.map((item)=> (
                            <div key={item.id} onClick={()=>
                                dataDetailFromDetail(item)
                            } >
                                <div className="bottom-image">
                                    <img src={item.image} alt=''/>
                                </div> 
                                <div className="bottom-content">
                                      <h3>{item.name}</h3>
                                      <p><span>{item.price}</span><sup>đ</sup></p>
                                </div>
                          </div>
                        ))
                    }
                          
                    </div>
              </div>
        </div>
     )


}


export default Detail;