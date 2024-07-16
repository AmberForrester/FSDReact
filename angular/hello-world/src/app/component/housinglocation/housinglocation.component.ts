// Update imports to include import to use interface created in housing-location.ts.
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocation } from '../../component/housing-location';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-housinglocation',
  standalone: true,
  imports: [CommonModule, RouterModule],

//   *** Customizing Components & Directives ***
// Build out structure for housing component
// Make the housing component customizable (create dynamically 1 component per housing location)
// Dynamically display housing locations
// Add CSS styling to the application 

// Added within the template to pass data to this component that contains the values we need:

  template: `
    <section class="listing">

    <!-- Within the component decorator metadata we update the template property to access the properties that we need to display. 
     1. img tag needs a source attribute to display an image. 
     KEEP IN MIND that the template treats the value of the src attribute as a string with the value housingLocation.photo. 
     To resolve this we use an Angular feature called property binding, placing src in [] -->
      <img class="listing-photo" [src]="housingLocation.photo" alt="Exterior photo of {{housingLocation.name}}">
    <!-- [src] in [] enables property binding, telling Angular that the value in quotes should be an actual property from the component class  -->

    <!-- Angular's Interpolation syntax can be creative to display what we want it to be, wrapping in Double Curly Braces {{ }}. 
    The housingLocationComponent now accepts an input, that we can use to customize the component.    -->
      <h2 class="listing-heading">{{ housingLocation.name }}</h2>
      <p class="listing-location">{{ housingLocation.city }}, {{ housingLocation.state }}</p>
      <a [routerLink]="['/details', housingLocation.id]">Learn More</a>
    </section>
  `,
  styleUrl: './housinglocation.component.css'
})


export class HousinglocationComponent {

  // Add a new import property named housingLocation
  // Mark a component with an input decorator that tells Angular that the property can be set in a template:  @Input() = prefix input decorator, ! = non null assertion operator: value wont be null or undefined.
  @Input() housingLocation!:HousingLocation;

  // Now our component has an input property named housingLocation.

}
