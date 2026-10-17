   import Aboutt1 from './assets/img2.webp'
    import Aboutt2 from './assets/img1.jpg'
     import Aboutt3 from './assets/img3.webp'
  
  
  function Projects(){

    return(


 <section id="projects" className="projects">
        <div className="container">
            <h2 className="section-title">My Projects</h2>
            <div className="projects-grid">
                <div className="project-card">
                 <img alt="Aamna Khatoon" src={Aboutt1}></img> 
                    <div className="project-info">
                        <h3>E-commerce Website</h3>
                        <p>A fully responsive e-commerce platform built with React and Node.js.</p>
                        <div className="project-links">
                            <a href="#"><i className="fab fa-github"></i></a>
                            <a href="#"><i className="fas fa-external-link-alt"></i></a>
                        </div>
                    </div>
                </div>
                <div className="project-card">
                 <img alt="Aamna Khatoon" src={Aboutt2}></img> 
                    <div className="project-info">
                        <h3>Task Management App</h3>
                        <p>A productivity app for managing tasks with drag-and-drop functionality.</p>
                        <div className="project-links">
                            <a href="#"><i className="fab fa-github"></i></a>
                            <a href="#"><i className="fas fa-external-link-alt"></i></a>
                        </div>
                    </div>
                </div>
                <div className="project-card">
                  
                        <img alt="Aamna Khatoon" src={Aboutt3}></img>
                    
                    <div className="project-info">
                        <h3>Weather Dashboard</h3>
                        <p>Real-time weather information with 5-day forecast using weather API.</p>
                        <div className="project-links">
                            <a href="#"><i className="fab fa-github"></i></a>
                            <a href="#"><i className="fas fa-external-link-alt"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    );

    }

    export default Projects
