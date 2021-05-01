import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/sidebar'
import Introduction from './components/introduction'
import About from './components/about'
import Projects from './components/projects'
import Timeline from './components/timeline'


class App extends Component {
  render() {
    return (
      <div id="colorlib-page" style={{backgroundImage: 'url(images/img_bg.jpg)'}}>
        <div id="container-wrap">
         	<Sidebar></Sidebar>
				  <div id="colorlib-main">
					<Introduction></Introduction>
					<About></About>
          <Timeline></Timeline>
          <Projects></Projects>
          </div>
      	</div>
      </div>
    );
  }
}

export default App;