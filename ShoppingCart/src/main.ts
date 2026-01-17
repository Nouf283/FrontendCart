/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideHttpClient } from '@angular/common/http';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
//   bootstrapApplication(App, {
//   providers: [provideHttpClient()]
// }).catch((err) => console.error(err));
