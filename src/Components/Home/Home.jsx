import React from 'react';
import './Home.css';
import g63 from  '../image/g63.jpg';
function Home({
  detail
}){
  return (
       <div className="home" id="home"
       style={{
      display: detail ?"none" : "flex"
      }}
       >
             <div>
                 <h2><span>Lttd</span>'s choice</h2>
                 <p>The best choice</p>
                <a href="#menu"> Shop now</a>
             </div>
       </div>
  )
}




export default Home