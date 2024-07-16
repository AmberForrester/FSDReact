import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

// Add HousinglocationComponent as a dependency of home component. 
import { HousinglocationComponent } from '../housinglocation/housinglocation.component';

import { HousingLocation } from '../../component/housing-location';
import { HousingService } from '../../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,

  // Update imports array of the component decorator metadata to include a reference to HousingLocationComponent.
  imports: [CommonModule, HousinglocationComponent],
  template: `
    <section>
      <form (submit)="onSubmit($event, filter.value)">
        <input type="text" placeholder="Filter by City" #filter required>
        <button class="primary" type="submit">Search</button>
      </form>
      <div *ngIf="showErrorMessage" class="error-message">Please enter a valid city name.</div>
    </section>
    <section class="results">

    <!-- Add app-housinglocation as a child to the results section elements. 
     
    The results section is where we want to iterate over the entries of the housingLocation list + display a housingLocation Component for each array entry. 

    Iterate over the entries of the housingLocation list using *ngFor directive. -->

    <!-- Enable Angular Template syntax with " " using "let housingLocation of filteredLocationList" means I have created a template variable called housingLocation that represents an entry from the filteredLocationList. -->
    <app-housinglocation *ngFor="let housingLocation of 
    filteredLocationList" [housingLocation]="housingLocation"></app-housinglocation>
    <!-- Enables both Property Binding with [ ] using [housingLocation] + Template Syntax with " " using = "housingLocation" that will pass the housingLocation data to the housingLocation component using the inputs from the component.-->
    </section>
  `,
  styleUrl: './home.component.css'
})


export class HomeComponent {

  // work with the list of housing locations by adding a adding a property (housingLocationList): value (HousingLocation) with a type of array = our array of housing locations.
  housingLocationList: HousingLocation[] = [];


  housingService: HousingService = inject(HousingService);
  filteredLocationList: HousingLocation[] = [];
  showErrorMessage: boolean = false;

  constructor() {
    this.housingService.getAllHousingLocations().then((housingLocationList: HousingLocation[]) => {
      this.housingLocationList = housingLocationList;
      this.filteredLocationList = housingLocationList;
    });
  }

  filterResults(text: string): boolean {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return true;
    } else {
      this.filteredLocationList = this.housingLocationList.filter(housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase()));
      return this.filteredLocationList.length > 0;
    }
  }

  onSubmit(event: Event, filterValue: string) {
    event.preventDefault();
    if (!filterValue || !this.filterResults(filterValue)) {
      this.showErrorMessage = true;
    } else {
      this.showErrorMessage = false;
    }
  }
}
