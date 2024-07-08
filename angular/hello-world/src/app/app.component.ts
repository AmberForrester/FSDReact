import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './component/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent], 
  //templateUrl: './app.component.html',
  template: `
    <main>
      <header class="brand-name">
        <img class="brand-logo" src="/images/logo.svg" alt="logo" aria-hidden="true">
      </header>
      <section class="content">
        <app-home></app-home>
      </section>
    </main>

    `,
  
  styleUrl: './app.component.css'
  
})
export class AppComponent {
  title = 'Welcome to learning Angular';
}
