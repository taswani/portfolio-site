import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">Highlights</span>
								<h2 className="colorlib-heading animate-box">Recent Projects</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-md-6 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/gary-site.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Marketing Website</a></h3>
											<span>Website</span>
											<p>
												<span>Created a static website for marketing and collection of data for client's coaching business using JavaScript, React.js, deployed on AWS.</span>
												<p></p>
												<span><a href="http://www.sla-gary.com" target="_blank">Link to site</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div className="col-md-6 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/ml_project.png)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Website serving Machine Learning Models</a></h3>
											<span>Website</span>
											<span>Created a full-stack website to host use of machine learning models using Python, Flask, SQLite3.</span>
											<p></p>
											<span><a href="https://github.com/taswani/amazon_stock_prediction_app" target="_blank">Link to code</a></span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
      </div>
    )
  }
}
