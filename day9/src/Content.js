import React from 'react'
import jobs from './JobListing.json';


const Content = () => {
  return (
    <main>

    <section id="job-listings" className="container">

      <h2>Job Listings</h2>

      <div id="job-listings-container">

        {jobs.map((job, index) => (

          <div className="job-listing" key={index}>

            <h3>{job.title}</h3>

            <p>{job.company}</p>

            <p>{job.location}</p>

            <p>{job.description}</p>

          </div>

        ))};

      </div>

    </section>

  </main>

  )
}

export default Content