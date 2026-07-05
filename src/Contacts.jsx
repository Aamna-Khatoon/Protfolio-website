  import Facebookpic from './assets/fb.png'
    import Linkpic from './assets/inst.png'
     import Gitpic from './assets/git.png'
      import Twittpic from './assets/twitt.png'

 import React, { useEffect, useState } from "react";
import axios from "axios";
 
 
 
 function Contacts(){

     const [users, setUsers] = useState([]);


    const [tasks, setTasks] = useState([]);
     const [newTasks, setNewTasks] = useState("");

     function handleInputChange(event){

     }

     function addTask(){

     }

     function deleteTask(index){

     }

     function moveTaskUp(index){

     }

     function moveTaskUp(index){

     }

return(

   

<section id="contact" className="contact">
        <div className="container">
            <h2 className="section-title">Get In Touch</h2>
            <div className="contact-container">
                <div className="contact-info">
                    <h3>Let's Talk</h3>
                    <p>Have a project in mind or want to discuss potential opportunities? Feel free to reach out!</p>
                    <div className="contact-details">
                        <div className="contact-item">
                            <i className="fas fa-envelope"></i>
                            <span>khatoonaamna666@gmail.com</span>
                        </div>
                        <div className="contact-item">
                            <i className="fas fa-phone"></i>
                            <span>+977-9817341640</span>
                        </div>
                        <div className="contact-item">
                            <i className="fas fa-map-marker-alt"></i>
                            <span>Biratnagar-06 , Nepal</span>
                        </div>
                    </div>
                    <div className="social-links">
                        <a href="https://www.facebook.com/" target="_blank"><i className="bi bi-facebook"> <img alt="Aamna Khatoon" src={Facebookpic}></img> </i></a>
                        <a href="https://www.instagram.com/ig_aameena/" target="_blank"><i className="fab fa-linkedin"> <img alt="Aamna Khatoon" src={Linkpic}></img></i></a>
                        <a href="https://github.com/"><i className="fab fa-twitter"><img alt="Aamna Khatoon" src={Gitpic}></img></i></a>
                        <a href="#"><i className="fab fa-instagram"><img alt="Aamna Khatoon" src={Twittpic}></img></i></a>
                    </div>
                </div>
                <form className="contact-form">
                    <div className="form-group">
                        <input 
                         type="text" 
                         placeholder="Your Name" 
                         required/>
                    </div>
                    <div className="form-group">
                        <input
                         type="email" 
                         placeholder="Your Email"
                          required />
                    </div>
                    <div className="form-group">
                        <input
                         type="text" 
                         placeholder="Subject"/>
                    </div>
                    <div className="form-group">
                        <textarea placeholder="Your Message" rows="5" required></textarea>
                    </div>
                    <button type="submit" className="btn">Send Message</button>
                </form>
            </div>
        </div>
      

  
    </section>
);
    }

export default Contacts