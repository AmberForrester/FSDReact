import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousinglocationComponent } from '../housinglocation/housinglocation.component';
import { HousingLocation } from '../../component/housing-location';
import { HousingService } from '../../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
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
    <app-housinglocation *ngFor="let housingLocation of filteredLocationList" [housingLocation]="housingLocation"></app-housinglocation>

    </section>
  `,
  styleUrl: './home.component.css'
})

export class HomeComponent {
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
