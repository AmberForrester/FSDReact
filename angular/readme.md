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

*** Using Images ***
Save images in an images folder w/in public folder
Then to call the image, you do not need to call the path, go and get the image for deployment setting 

For example using -> /images/*image-name.jpg or .svg

.listing-location::before {
    content: url('/images/location-pin.svg') / '';
  }