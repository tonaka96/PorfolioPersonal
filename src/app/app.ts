/* IMPORTS DE ANGULAR Y ROUTER */
import { Component, signal, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { Router, NavigationEnd, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

/* IMPORTS DE COMPONENTES GLOBALES */
import { Nabvar } from './components/nabvar/nabvar';

/* CONFIGURACION DEL COMPONENTE RAIZ */
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Nabvar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  /* ESTADO GLOBAL DE LA APP */
  protected readonly title = signal('PorfolioPersonal');

  /* INYECCION DE DEPENDENCIAS */
  constructor(
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  /* REINICIO DE SCROLL POR CADA CAMBIO DE PAGINA */
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.router.events
        .pipe(filter(event => event instanceof NavigationEnd))
        .subscribe(() => {
          window.scrollTo(0, 0);
        });
    }
  }
}
