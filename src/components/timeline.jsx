import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">Work</span>
                <h2 className="colorlib-heading animate-box">Professional Experience</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Software Engineer at Syapse <span>August 2021 - Present</span></h2>
                        <ul>
                          <li>Adding custom features to help reduce errors in production by 25%</li>
                          <li>Built custom APIs in Django to help deliver FHIR data</li>
                          <li>Redesign of backend architecture to help accelerate data ingestion processes</li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Data Operations Engineer at Bridge Investment Group <span>August 2020 - August 2021</span></h2>
                        <ul>
                          <li>Built prediction model of which Financial advisors have brought in most investors/money to firm using Logistic Regression, Python, Pandas, Scikit-learn to analyze data, saving Client Solutions group ~25-30 hours in manual work and ~$100,000 in prioritization of marketing.</li>
                          <li>Web scraping of Wealth Management websites to accrue a database of contact information for Financial Advisors utilizing Python, Selenium, SQL to access and store the data from websites, saving Client Solutions group ~12-16 hours in manual work.</li>
                          <li>Automated upload and download of Investor data to Investor portal using Python, Selenium saving Investor Services team ~12 hours a week via automation.</li>
                          <li>Cleaned Duplicate Records and predicted duplicates within Salesforce employing K-Means Cluster Analysis, Logistic Regression, Python, Pandas, Scikit-learn cleaning Salesforce CRM records by ~30% and ensuring data integrity.</li>
                        </ul>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Digital Learning Engineer at Enact Leadership <span>January 2019 - October 2019</span></h2>
                        <ul>
                          <li>Delivered accurate estimates for user engagement in online learning activities, resulting in client renewals using Python, SQL to access and analyze data, increasing profitability of the program by ~$35,000.</li>
                          <li>Automated mass email delivery for Digital Learning Program using Node.js increasing user engagement by ~35%.</li>
                          <li>Managed company website, through updates and addition of features utilizing PHP, Python, JavaScript, CSS saving company ~$2700 by having website managed in house.</li>
                        </ul>
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
