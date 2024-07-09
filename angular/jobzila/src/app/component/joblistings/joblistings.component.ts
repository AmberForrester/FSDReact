import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobListings } from '../job-listings';

@Component({
  selector: 'app-joblistings',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="job-listing">
      <h5>Job Listings</h5>
      <h2>{{ job.title }}</h2>
      <p>{{ job.company }}</p>
      <p>{{ job.location }}</p>
      <p>{{ job.description }}</p>
      <a [href]="job.applyLink" target="_blank">Apply</a>
    </div>
  `,


  styleUrl: './joblistings.component.css'
})
export class JoblistingsComponent {
  @Input() job!:JobListings;

}
