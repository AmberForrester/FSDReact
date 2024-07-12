import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, Routes } from '@angular/router';
import { provideClientHydration } from '@angular/platform-browser';
import routeConfig from './routes';

export const appConfig: ApplicationConfig = {
providers: [
  provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routeConfig), 
  provideClientHydration()
]
};
