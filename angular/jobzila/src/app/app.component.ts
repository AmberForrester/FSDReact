import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JoblistingComponent } from './component/joblisting/joblisting.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, JoblistingComponent],
  //templateUrl: './app.component.html',
  template: `
    <main>
      <header>
        <h1>JobZila</h1>
      </header>
      
      <section id="job-listings" class="container"> 

        <app-joblisting></app-joblisting>

      </section>
      
      


      <footer>

      </footer>
      
    </main>

    `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'jobzila';
}
