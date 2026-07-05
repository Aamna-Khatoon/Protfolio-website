 import Aboutt from './assets/about.jpeg'

function About(){

    
    
    return(<section id="about" className="about">
        <div className="container">
            <h2 className="section-title">About Me</h2>
            <div className="about-content">
                <div className="about-image">
                 <img alt="Aamna Khatoon" src={Aboutt}></img> 
                </div>
                <div className="about-text">
                    <p>I'm a passionate frontend developer , creating responsive and user-friendly websites. I specialize in JavaScript, React, and modern CSS techniques.</p>
                    <p>When I'm not coding, you can find me hiking, reading books, or experimenting with new recipes in the kitchen.</p>
                    <div className="about-details">
                        <div className="detail-item">
                            <i className="fas fa-user"></i>
                            <span>Name: Aamna Khatoon</span>
                        </div>
                        <div className="detail-item">
                            <i className="fas fa-phone"></i>
                            <span>Phone: +977-9817341640</span>
                        </div>
                        <div className="detail-item">
                            <i className="fas fa-envelope"></i>
                            <span>Email: khatunamna66@gmail.com</span>
                        </div>
                        <div className="detail-item">
                            <i className="fas fa-map-marker-alt"></i>
                            <span>Location: Biratnagar-06, Nepal</span>
                        </div>
                    </div>
                    

<a
        href="/public/data.pdf"
        className="btn"
        download="data.pdf"
       
      >
        Download CV
      </a>


                   
                </div>
            </div>
        </div>
    </section>

    );

    }

    export default About