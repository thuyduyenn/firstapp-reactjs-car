import React from 'react';
import './Contact.css';
import {AiFillFacebook} from 'react-icons/ai';
import {AiFillInstagram} from 'react-icons/ai';
import {AiOutlineTwitter} from 'react-icons/ai';
import {FaTelegramPlane} from 'react-icons/fa';
import {RiFileUserFill} from 'react-icons/ri';
import {MdEmail} from 'react-icons/md';
import {BiCommentDetail} from 'react-icons/bi';
import {BsSend} from 'react-icons/bs';
function Contact({
    detail
}) {
      return (
          <div className="contact" id="contact"
          style={{
        display: detail ?"none" : "block"
      }}
          >
              <h1> <span>Contact</span> us </h1>
              <div className="contact-container">
            
                  <div className="contact-right">
                        <form>
                             <div id="contact-form">
                             <label htmlFor="name"><RiFileUserFill/></label>
                             <input type="text"  id="name" placeholder="full name..."/>
                             </div>
                             <div id="contact-form">
                             <label htmlFor="email"><MdEmail/></label>
                             <input type="text"  id="email" placeholder="email..."/>
                             </div>
                             <div id="contact-form">
                             <label htmlFor="comment"><BiCommentDetail/></label>
                             <input type="text" id="comment" placeholder="comment..."/>
                             </div>
                             <div className="btn">
                                   <div>
                                       <button type="submit"><BsSend className="send"/></button>
                                  </div>
                            </div>
                        </form>
                  </div>
              </div>
          </div>
      )
}
export default Contact;