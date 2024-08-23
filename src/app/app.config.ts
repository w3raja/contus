import { ApplicationConfig, ErrorHandler, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideHttpClient } from '@angular/common/http';
import { Myerror } from './error/error';

export const appConfig: ApplicationConfig = {
  providers: [
    {provide: ErrorHandler, useClass:Myerror},
    provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideHttpClient()
  ]
};
