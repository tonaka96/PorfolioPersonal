/* IMPORTS DE ANGULAR Y NAVEGACION */
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from "@angular/router";

/* CONFIGURACION DEL COMPONENTE DE BARRA DE NAVEGACION */
@Component({
  selector: 'app-nabvar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './nabvar.html',
  styleUrl: './nabvar.css',
})
export class Nabvar {

}
