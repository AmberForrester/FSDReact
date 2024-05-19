import React, { useState } from 'react'
import jobsData from './Jobs.json';

const SearchJobs = () => {

  const [keywords, setKeywords] = useState('');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [searchPerformed, setSearchPerformed] = useState(false);

  const handleSearch = (e) => {
    e.preventDefault();
    const keywordTerms = keywords.toLowerCase().split(' ').filter(term => term);
    const locationLower = location.toLowerCase();
    const categoryLower = category.toLowerCase();

    const filtered = jobsData.filter(job => {
      const jobTitleLower = job.title.toLowerCase();
      const jobDescriptionLower = job.description.toLowerCase();
      const matchesKeyword = keywordTerms.every(term => jobTitleLower.includes(term) || jobDescriptionLower.includes(term));
      const matchesLocation = locationLower === '' || job.location.toLowerCase().includes(locationLower);
      const matchesCategory = categoryLower === '' || job.title.toLowerCase().includes(categoryLower);

      return matchesKeyword && matchesLocation && matchesCategory;
    });

    setFilteredJobs(filtered);
    setSearchPerformed(true);
  };

  return (
    <main>
      <section id="job-search-section" class="container">
        <h2>Your Dream Job Awaits</h2>
        <div class="find-job-div">
        <form id="search-form" onSubmit={handleSearch}>
          <input
            type="text"
            name="keywords"
            id="keywords"
            placeholder="Keyword"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
          />
          <input
            type="text"
            name="location"
            id="location"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <select 
            name="category" 
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}>
            <option value="">All Categories</option>
            <option value="data scientist">Data Scientist</option>
            <option value="developer">Developer</option>
            <option value="it">IT</option>
            <option value="marketing">Marketing</option>
            <option value="software engineer">Software Engineer</option>
            <option value="ui/ux designer">UI/UX Designer</option>
          </select>
          <input type="submit" value="Search Jobs" />
        </form>
        {searchPerformed && (
          <section id="job-results-section">
            <h3>Job Results</h3>
            {filteredJobs.length > 0 ? (
              <ul>
                {filteredJobs.map(job => (
                  <li key={job.jobid}>
                    <h4>{job.title}</h4>
                    <p>{job.company} - {job.location}</p>
                    <p>{job.description}</p>
                    <a href={job.applyLink} target="_blank" rel="noopener noreferrer">Apply</a>
                  </li>
                ))}
              </ul>
            ) : (
              <p>Sorry, no jobs found matching your criteria.</p>
            )}
          </section>
        )}
        </div>
      </section>
    </main>
  );
};

export default SearchJobs;