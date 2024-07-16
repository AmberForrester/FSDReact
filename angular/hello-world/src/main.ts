import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

// Import Angluar Router, that enables routing in the application. 
import { provideRouter } from '@angular/router';
import routeConfig from './app/routes';

bootstrapApplication(AppComponent, {

  // Added  a JavaScript literal with 1 property called providers + set the providers property value. 
  providers: [
    provideRouter(routeConfig)
  ]
}).catch((err) => console.error(err));
