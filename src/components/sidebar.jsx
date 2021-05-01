import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/about.jpg)'}} />
              <h1 id="colorlib-logo"><a href="index.html">Tanuj Aswani</a></h1>
              <span className="email"><i className="icon-mail"></i><a href='mailto:tanuj.aswani@gmail.com'> tanuj.aswani@gmail.com</a></span>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  <li><a href="#timeline" data-nav-section="timeline">Work Experience</a></li>
                  <li><a href="#projects" data-nav-section="projects">Projects</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://www.linkedin.com/in/tanuj-aswani/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                <li><a href="https://github.com/taswani" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
                <li><a href="https://docs.google.com/document/d/1EB6yLDBuQrfzo7nk5QjQsx4mmEVVs-1cOcMRjur-sCE/edit?usp=sharing" target="_blank" rel="noopener noreferrer">Résumé</a></li>
              </ul>
            </nav>
            <div className="colorlib-footer">
              <p><small>
                  Thanks <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a> for inspiration!
              </small></p>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}
