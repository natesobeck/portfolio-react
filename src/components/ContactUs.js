import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
              <p className="lead">
              I am currently open to work. Feel free to reach out on LinkedIn, check out my GitHub or shoot me an email about your next project and how I can make it happen for you.
              </p>

          </div>
        </section>
        );
  }
}