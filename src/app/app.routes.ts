/* IMPORTS DE ROUTING Y COMPONENTES */
import { Routes } from '@angular/router';
import { MainComponent } from './components/main/main';
import { About } from './components/about/about';
import { Projects } from './components/projects/projects';
import { Contact } from './components/contact/contact';

/* CONFIGURACION DE LAS RUTAS DE LA APLICACION */
export const routes: Routes = [
    { path: '', component: MainComponent },
    { path: 'about', component: About },
    { path: 'projects', component: Projects },
    { path: 'contact', component: Contact },
    { path: '**', redirectTo: '' } // REDIRECCION A INICIO POR DEFECTO
];
