import React from 'react';
import AboutUs from '../image/anhme.jpg';
import './About.css';
import {AiFillStar,AiOutlineStar} from 'react-icons/ai';
function About({
      detail
   }
){
    return (
       <div className="about"
       style={{
      display: detail ?"none" : "block"
      }}>
           
            <div className="about-container" id="about">
                  <div className="about-left">
                       <img src={AboutUs} alt="about us"/>
                  </div>
                  <div className="about-right">
                       <h1><span>About </span>me</h1>
                      <p><AiFillStar className="start"/> Tên :<span> Lê Thị Thuý Duyên</span></p>
                      <p><AiFillStar className="start"/> Năm sinh:<span> 2004 </span></p>
                      <p><AiFillStar className="start"/> Nghề nghiêp : <span>Nhân viên Digital Marketing</span></p>
                      <p><AiFillStar className="start"/> Học tại trường <span>Tài Chính Marketing</span></p>
                      <p><AiFillStar className="start"/> Kĩ năng :<span> lập trình frontend + backend Web </span>
                        <ul>
                           <li><AiOutlineStar className="start-"/> HTML,CSS,Javascript,ReactJS</li>
                           <li><AiOutlineStar className="start-"/> PHP,Laravel</li>
                        </ul>
                       </p>
                       <p><AiFillStar className="start"/> Kĩ năng nhất định có trong tương lai:
                          <ul>
                             <li><AiOutlineStar className="start-"/> Thành thạo Excel</li>
                             <li> <AiOutlineStar className="start-"/> Thành thạo PowerPoint</li>
                             <li><AiOutlineStar className="start-"/> Thành thạo word</li>
                             <li><AiOutlineStar className="start-"/> Bằng Toeic</li>

                          </ul>
                       </p>
                       <p><AiFillStar className="start"/><AiFillStar className="start"/><AiFillStar className="start"/> Muốn có nhất là tiền</p>
                   

                  </div>
            </div>
       </div>
    )
}
export default About;