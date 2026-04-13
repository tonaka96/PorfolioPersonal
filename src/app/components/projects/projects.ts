/* IMPORTS DE ANGULAR Y SERVICIOS */
import { Component, OnInit, signal } from '@angular/core';
import { Api } from '../../service/api';
import { CommonModule } from '@angular/common';

/* COMPONENTE DE LISTADO DE PROYECTOS */
@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects implements OnInit {
  constructor(private api: Api) { }

  /* ESTADO REACTIVO PARA LOS PROYECTOS */
  data = signal<any[]>([]);

  /* LLAMADA AL SERVICIO PARA OBTENER REPOSITORIOS */
  llenarData() {
    this.api.getData().subscribe({
      next: (data) => {
        this.data.set(data);
      },
      error: (error) => {
        console.error('Error al obtener datos:', error);
      }
    });
  }

  /* INICIALIZACION DEL COMPONENTE */
  ngOnInit() {
    this.llenarData();
  }
}
