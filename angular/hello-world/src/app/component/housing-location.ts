// Use the interface to let the component know what TYPE of data to expect

export interface HousingLocation {
    id: number,
    name: string,
    city: string,
    state: string,
    photo: string,
    availableUnits: number,
    wifi: boolean,
    laundry: boolean
}

// Interface created to shape our data, define the structure and update the properties that describe our data.

// Use @inputproperties to pass data into our component.
// Mark a component with an input decorator = tells Angular that the property can be set in a template. 
// @Input() = prefix input decorator
// ! = non null assertion operator: value wont be null or undefined. 