 import Profilepic from './assets/me.jpg'
 
 function Home(){
 return(

<section id="home" className="hero">
        <div className="container">
            <div className="hero-content">
                <h1>Hi, I'm <span>Aamna Khatoon</span></h1>
                <h2>Frontend Developer</h2>
                <p>I build exceptional digital experiences that make people's lives easier.</p>
                <div className="cta-buttons">
                    <a href="#projects" className="btn">View My Work</a>
                    <a href="#contact" className="btn secondary">Contact Me</a>
                </div>
            </div>
            <div className="hero-image">
               <img alt="Aamna Khatoon" src={Profilepic}></img>
            </div>
        </div>
    </section>
    );

    }

    export default Home