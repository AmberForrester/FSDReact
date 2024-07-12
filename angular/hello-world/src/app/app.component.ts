import { Component } from '@angular/core';
import { HomeComponent } from './component/home/home.component';
import { RouterModule } from '@angular/router';


@Component({

  standalone: true,

  selector: 'app-root',

  template: `
    <main>
      <header class="brand-name">
        <img class="brand-logo" src="/images/logo.svg" alt="logo" aria-hidden="true">
      </header>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
    `,
  
  styleUrls: ['./app.component.css'], 
  imports: [HomeComponent, RouterModule]

})
export class AppComponent {
  title = 'Welcome to learning Angular';
}
