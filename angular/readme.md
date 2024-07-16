***Angular***
- Provides structure + consistency
- Opensource JS Framework written in TypeScript
- TypeScript based free opensource SPA: powerful + scalable
- Includes Frontend framework (allowing manipulation of the front end) 
- Two way data binding ("back/forth") + real DOM: involves the client and server side rendering, two way can be validated from server everytime = server protection
- Provides developer tooling with Angular CLI, etc + increases productivity
- Decreased decision fatigue with router solutions, etc for developer convenience
- Evergreen identifying/updating tools w/available update commands
- TypeScript using compile time checks, early bug detection, etc
- Legacy code
- Works with Node, and can write Express
- Enterprise level applications



Resources Needed - node
https://angular.dev/ - new resource documentation 

https://v17.angular.io/guide/what-is-angular

Play List by Angular https://www.youtube.com/playlist?list=PL1w1q3fL4pmj9k1FrJ3Pe91EPub2_h4jF

TypeScript Intro https://www.youtube.com/watch?v=d56mG7DezGs&ab_channel=ProgrammingwithMosh

check node version: w/in terminal -> node --version 

*** How to Set Up Angular ***
1. Pick up powershell and run as administrator 
2. Run command -> npm install -g @angular/cli
3. Create folder for angular projects + copy path
4. Within terminal, open angular folder: cd .\angular\
5. Within terminal: angular> ng new "name of new project folder", for example when creating hello-world we used -> ng new hello-world

*** Execution Errors ***

Example of what the error reads (in red ink): 
"File C:\Users\sjokh\AppData\Roaming\npm\ng.ps1 cannot be loaded because running scripts is disabled on this system. For more information, see about_Execution_Policies at https:/go.microsoft.com/fwlink/?LinkID=135170.
At line:1 char:1
+ng new hello-world
+~~
    +Category info       : SecurityError: (:) [], PSSecuirtyExeception
    +FullyQualifiedErrorId: UnauthorizedAccess"

1. Open the power shell as an administrator, and execute the following commands: 
- Get-ExecutionPolicy 
- Set-ExecutionPolicy RemoteSigned

2. It will ask you the following and here are the correct responses to continue executing:
- Do you want to change the execution policy? -> type A
- Then enter the following command again -> ng new "name of new project folder", for example when creating hello-world we used -> ng new hello-world
- Would you like to share with Google -> type No
- What stylesheet format to use? -> the first option should remain highlighted for CSS, and then hit Enter
- Enable Server Side Rendering (SSR)? -> type yes 



*** VS Code Extensions for Angular ***
Angular Snippets
Angular Files
Angular2-Inline
ESLint
JSON to TS
Path Intellisense
REST Client
Angular2-Switcher
Angular Language Service 
Material Icon Theme

https://medium.com/@sasidharansd/top-10-must-have-vscode-extensions-for-angular-developers-in-2022-5a76edfdeeba



*** How to run Angular ***
1. Go to the correct project folder: For example with hello world w/in Terminal type the following -> cd .\angular\
                         angular> cd .\hello-world\
                     hello-world> ng serve

Results w/in Terminal:  PORT 4200 showing, with an available link to view application on browser

*** First steps to set up Hello World ***
1. Go to app.component.html -> delete everything and replace it with <h1> Hello World </h1>

2. Apply styles to the content w/in app.component.css 
h1 {
    color:blue;
}

3. Now go to app.component.ts and see how you can manipulate the title

export class AppComponent {
    title = 'Welcome to learning Angular';
}

OR 

w/in app.component.html: Add the following and watch the connection/manipulation of the title available using - 

<h1>Hello World</h1>
<h1>{{title}}</h1>
<h1>{{50+60}}</h1>

= the browser rendering the following results on the page:
Hello World
Welcome to learning Angular
110

*Keep in mind that you can also create your own variables to manipulate in the export class AppComponent {
    jobdesc = 'Full Stack Developer'
}

*** Key Learning Videos to Watch ***
Learn TypeScript with freeCodeCamp
https://youtu.be/30LWjhZzg50?si=03t0sBR2_V7sUJI_

Learning Angular Tutorial App to build your first Angular Application
https://www.youtube.com/playlist?list=PL1w1q3fL4pmj9k1FrJ3Pe91EPub2_h4jF



*** Components ***
- Can be nested and used inside another
- TypeScript Component Class: provides a place for developers to build application logic, and make API calls for data or to defind event handlers
- HTML Template: define UI template for the component. (small template = write in component class, complex template = own HTML file)
- CSS Styles: Saas, CSS, LESS, component styles inline scoped to our components

The following command creates a component w/in Terminal - 
> ng generate component Home --standalone --inline-template

> ng = Angular CLI
> generate = create a component
> component
> Home = name of component
> --standalone = creates a standalone component that decreases complexity (does not contain common module)
> --inline-template = less files for us to manage 



*** Common Module *** Part of '@angular/common';
-> import { CommonModule } from '@angular/common'; - at the top 
-> update imports array of the component decorator metadata to include a reference to CommonModule: imports: [CommonModule],

Angular Common Module:  - provides common directives, pipes, and services
                        - ensures you have access to basic building blocks needed to create Angular applications

Pay Special Attention -
* When creating a new component within an Angular Module: import CommonModule is NOT needed R/T it will already be imported like within the AppModule
* Creating a --standalone component or module: YOU NEED TO IMPORT the CommonMondule to use its functionalities 

CommonModule provides access to directives: essential for building templates
    Examples of directives include  - *ngIF: conditionally includes template based on value of expression
                                    - *ngFor: iterates over a collection, creating a new instance of the template for each item
                                    - *ngClass: adds + removes css classes on an HTML element
                                    - *ngStyle: adds + removes inline styles on an HTML element

CommonModule provides access to pipes: used to transform data in templates
    Examples of pipes include   - DatePipe, UpperCasePipe, LowerCasePipe, CurrencyPipe

CommonMondule provides access to services: various utility services that are frequently used in Angular applications 



*** Using Images ***
Save images in an images folder w/in public folder
Then to call the image, you do not need to call the path, go and get the image for deployment setting 

For example using -> /images/*image-name.jpg or .svg

.listing-location::before {
    content: url('/images/location-pin.svg') / '';
  }



  *** Starting Angular Housing Listing App ***

  Making connections between components:
  1. Open the app.component.ts.
  2. At the end of the </header> tag -> call a section:
  <section class="content">
        <app-home></app-home>  *Bring in the app-home component to show the text. 
  </section>
  3. Import the home component within imports: [RouterOutlet, HomeComponent] + at the top just below the import {Component} -> import { HomeComponent } from './component/home/home.component';

  4. Create another component using the following command in Terminal: > ng generate component component/housinglocation --standalone --inline-template
        Within the component folder, this will create another component file called housinglocation with the following files: housinglocation.component.css, housinglocation.component.spec.ts, housinglocation.component.ts

  5. Open the home.component.ts, and add the HousinglocationComponenet as a dependency by importing it: 
  -> at top of home.component.ts just below the import {CommonModule}, import { HousinglocationComponent } from '../housinglocation/housinglocation.component';
  -> update imports array of the component decorator metadata to include a reference to HousingLocationComponent: imports: [CommonModule, HousinglocationComponent]

  6. Add housinglocation as a child to the results section elements: 
  <section class="results">
    <app-housinglocation></app-housinglocation>
  </section>



*** Customizing Components & Directives ***
- Build out structure for housing component
- Make the housing component customizable (create dynamically 1 component per housing location)
- Dynamically display housing locations
- Add CSS styling to the application 

Within housinglocation.component.ts -
Add the following within the template to pass data to this component that contains the values we need: `
<section class="listing">
      <img class="listing-photo">
      <h2 class="listing-heading"></h2>
      <p class="listing-location"></p>
</section>
`, 



*** Input Properties ***
Angular feature that allows Angular components to receive data, creating a data flow from the Parent to the Child. 
Start thinking -> How do we configure the data? ... Thinking of the data from each location 

Housing Location Data contains the following: {
                                                "id": 0,
                                                "name": "Acme Fresh Start Housing",
                                                "city": "Chicago",
                                                "state": "IL",
                                                "photo": "/images/acmeFreshStartHousing.jpg",
                                                "availableUnits": 4,
                                                "wifi": true,
                                                "laundry": true
                                              }



*** Angular Type *** Helps us to know what to expect from the data we encounter. 

An example of a job for the type:
On the landing page, we will only need to display name, city, and state -> These are 3 properties we want to use in our components + we want our component to accept housing location data in this specific format. 

To create a new type that represents our data, we will create an Interface to use in our application. 



*** Interface *** "Shape our data"
- A contract between us and the data
- Tells us that we expect the data to follow the structure defined, by the interface
- Use the interface to let the component know what TYPE of data to expect

Run the following command to create an interface >ng generate interface component/housingLocation *capital L is key 
    Within the app folder, the following file for the interface will be created: housing-location.ts 

    housing-location.ts will give us the opportunity to update the properties that describe our data with the ability to export interface HousingLocation {
                                                                                                                                                            id: number,
                                                                                                                                                            name: string,    
                                                                                                                                                            city: string,    
                                                                                                                                                            state: string,    
                                                                                                                                                            photo: string,
                                                                                                                                                            availableUnits: number,    
                                                                                                                                                            wifi: boolean,    
                                                                                                                                                            laundry: boolean        
                                                                                                                                                          }    

- Use @inputproperties to pass data into our component. 



* In the housinglocation.component.ts, at the top update imports to include input from '@angular/core'->   import { Component, Input } from '@angular/core';
            +  Add a new import property within the export class HousinglocationComponent {
                                                    -> @Input() housingLocation!:HousingLocation;
                                                    } 

* Mark a component with an input decorator = tells Angular that the property can be set in a template:  @Input() = prefix input decorator
                                                                                                        ! = non null assertion operator: value wont be null or undefined

                                                                                                        *** Now our component has an input property named housingLocation.

Within the component decorator metadata we update the template property to access the properties that we need to display in 3 STEPS - (see below STEP 1, STEP 2, STEP 3)



*** Property Binding *** Tells Angular that the value in quotes should be an actual property from the component class
- wrapping in [] enables the Angular feature called Property Binding

For example in the housing listing application - specific to the housinglocation.component.ts file: 
 
    STEP 1 - The img tag needs a source attribute to display an image. 
    KEEP IN MIND that the template treats the value of the src attribute as a string with the value housingLocation.photo. 

To resolve this we use property binding, by placing src in []:
<img class="listing-photo" [src]="housingLocation.photo">
[src] in [] enables property binding, telling Angular that housingLocation.photo should be an actual property from the component class.


*** Angular's Interpolation Syntax *** Mixes values + expressions into strings in our templates
- wrapping in { } enables Angular's Interpolation syntax

For example in housinglocation.component.ts file - 

Within the component decorator metadata template: 
<img class="listing-photo" [src]="housingLocation.photo" alt="Exterior photo of {{housingLocation.name}}">

Angular's Interpolation syntax can be creative to display what we want it to be. 
For example within our <section class="listing">
<img class="listing-photo" [src]="housingLocation.photo" alt="Exterior photo of {{housingLocation.name}}">
<h2 class="listing-heading">{{ housingLocation.name }}</h2>
<p class="listing-location">{{ housingLocation.city }}, {{ housingLocation.state }}</p>
</section>

{{ housingLocation.name }}
{{ housingLocation.city }}
{{ housingLocation.state }}

* The housingLocationComponent now accepts an input, that we can use to customize the component. 

    STEP 2 - Within the home.component.ts file:

Work with the list of housing locations, by adding our list - adding a property (housingLocationList): value (HousingLocation) with a type of array = our array of housing locations
export class HomeComponent {
  housingLocationList: HousingLocation[] = [*Paste the array list of housing locations HERE*];
}

    STEP 3 - The results section is where we want to iterate over the entries of the housingLocation list + display a housingLocation Component for each array entry. 
             Iterate over the entries of the housingLocation list using *ngFor directive: R/T Angular directives allow us to add additional functionality to elements & components. 
    
Within the home.component.ts file:
</section>
<section class="results">
Within the child of the results section element, apply the *ngFor directive                     
<app-housinglocation *ngFor="let housingLocation of HousingLocationList" [housingLocation]="housingLocation"></app-housinglocation>
</section>

"let housingLocation of HousingLocationList" -> code is within " " R/T *** Angular Template Syntax ***: creates a template variable called housingLocation that represents an entry from the housingLocation list.

[housingLocation]="housingLocation" --> This line of code enables property binding + template syntax and will pass the [housingLocation] data to the "housingLocation" component using the inputs from the component. 


*** How to route in Angular ***
Allows us to navigate our way through the pages -> Angular Router

Ex.     Home      >      Angular     >    Details
      Component          Router          Component 

1. Enable routing in our application

Within the main.ts import the provide router -

after the import { AppComponent } from './app/app.component';
      *-> import { provideRouter } from '@angular/router';

2. Add a JavaScript literal with 1 property called providers + set the providers property value to be an empty array - 

bootstrapApplication(AppComponent, {

*->  providers: ([])

}).catch((err) => console.error(err));

The empty array as the providers property value represents our application routes. Routes define which path link to components in the application. 

At this point no routes have been defined, so the next step is to create routes -> create a file under src app folder called routes.ts 







