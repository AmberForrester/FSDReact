import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JoblistingsComponent } from '../joblistings/joblistings.component';
import { JobListings } from '../job-listings';

@Component({
  selector: 'app-joblisting',
  standalone: true,
  imports: [CommonModule, JoblistingsComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by Title">
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      <app-joblistings *ngFor="let job of jobListingsList" [job]="job"></app-joblistings>
    </section>
  `,
  styleUrl: './joblisting.component.css'
})
export class JoblistingComponent {

  jobListingsList: JobListings[] = [
    {
      "jobid": "1",
      "title": "Front-end Developer",
      "company": "ABC Company",
      "location": "Toronto, ON",
      "description": "We are seeking a talented Front-end Developer to join our team...",
      "applyLink": "https://example.com/apply"
    },
    {
      "jobid": "2",
      "title": "Back-end Developer",
      "company": "XYZ Corporation",
      "location": "Markham, ON",
      "description": "We are looking for an experienced Back-end Developer to work on our...",
      "applyLink": "https://example.com/apply"
    },
    {
      "jobid": "3",
      "title": "UI/UX Designer",
      "company": "DEF Design Studio",
      "location": "Brampton, ON",
      "description": "We are seeking a creative UI/UX Designer to join our design team...",
      "applyLink": "https://example.com/apply"
    },
    {
      "jobid": "4",
      "title": "Software Engineer",
      "company": "123 Tech Inc.",
      "location": "Hamilton, ON",
      "description": "We are hiring a skilled Software Engineer to develop innovative software...",
      "applyLink": "https://example.com/apply"
    },
    {
      "jobid": "5",
      "title": "Data Scientist",
      "company": "Data Analytics Co.",
      "location": "Toronto, ON",
      "description": "We are looking for a data-driven Data Scientist to analyze and interpret data...",
      "applyLink": "https://example.com/apply"
    },
    {
      "jobid": "6",
      "title": "Marketing Specialist",
      "company": "Marketing Solutions Inc.",
      "location": "Mississauga, ON",
      "description": "We are seeking a dynamic Marketing Specialist to create and implement marketing...",
      "applyLink": "https://example.com/apply"
    },
    {
        "jobid": "7",
        "title": "Front-end Developer",
        "company": "ABC Company",
        "location": "Markham, ON",
        "description": "We are seeking a talented Front-end Developer to join our team...",
        "applyLink": "https://example.com/apply"
      },
      {
        "jobid": "8",
        "title": "Back-end Developer",
        "company": "XYZ Corporation",
        "location": "Pickering, ON",
        "description": "We are looking for an experienced Back-end Developer to work on our...",
        "applyLink": "https://example.com/apply"
      },
      {
        "jobid": "9",
        "title": "UI/UX Designer",
        "company": "DEF Design Studio",
        "location": "Pickering, ON",
        "description": "We are seeking a creative UI/UX Designer to join our design team...",
        "applyLink": "https://example.com/apply"
      },
      {
        "jobid": "10",
        "title": "Software Engineer",
        "company": "123 Tech Inc.",
        "location": "Brampton, ON",
        "description": "We are hiring a skilled Software Engineer to develop innovative software...",
        "applyLink": "https://example.com/apply"
      },
      {
        "jobid": "11",
        "title": "Data Scientist",
        "company": "Data Analytics Co.",
        "location": "Victoria, BC",
        "description": "We are looking for a data-driven Data Scientist to analyze and interpret data...",
        "applyLink": "https://example.com/apply"
      },
      {
        "jobid": "12",
        "title": "Marketing Specialist",
        "company": "Marketing Solutions Inc.",
        "location": "Victoria, BC",
        "description": "We are seeking a dynamic Marketing Specialist to create and implement marketing...",
        "applyLink": "https://example.com/apply"
      },
      {
        "jobid": "13",
        "title": "Front-end Developer",
        "company": "ABC Company",
        "location": "Montreal, QC",
        "description": "We are seeking a talented Front-end Developer to join our team...",
        "applyLink": "https://example.com/apply"
      }
  ];

}
