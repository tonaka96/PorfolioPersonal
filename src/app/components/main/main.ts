/* IMPORTS DE ANGULAR Y ROUTER */
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

/* CONFIGURACION DEL COMPONENTE PRINCIPAL */
@Component({
  selector: 'app-main',
  imports: [RouterLink],
  templateUrl: './main.html',
  styleUrl: './main.css',
})
export class MainComponent {
}