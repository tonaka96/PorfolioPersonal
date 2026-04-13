/* IMPORTS DE CONFIGURACION DE ANGULAR */
import { ApplicationConfig, provideZonelessChangeDetection   } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';

/* IMPORT DE RUTAS */
import { routes } from './app.routes';

/* CONFIGURACION DE PROVEEDORES GLOBALES */
export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideHttpClient()
  ]
};
