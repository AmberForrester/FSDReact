import React from 'react'

const JobListings = () => {

    let jobListingContainer = document.getElementById("job-listings-container");
    for (let i = 0; i < data.length; i++) {
      let jobListing = data[i];
      let jobListingElement = document.createElement("div");
      jobListingElement.classList.add("job-listing");
      jobListingElement.innerHTML = `
      
            <h3>${jobListing.title}</h3>
            <p>${jobListing.company}</p>
            <p>${jobListing.location}</p>
            <p>${jobListing.description}</p>


`;
      jobListingContainer.appendChild(jobListingElement);
    }

    return (
        <main>
          <section id="job-listings" class="container">
            <h2>Job Listings</h2>
            <div id="job-listings-container"></div>
          </section>
        </main>
      )
      
  };

  

export default JobListings