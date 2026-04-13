/* IMPORTS DE ANGULAR */
import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

/* CONFIGURACION DEL COMPONENTE */
@Component({
  selector: 'app-contact',
  imports: [RouterLink],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  /* ESTADO DEL FORMULARIO */
  protected isSent = signal(false);

  /* LOGICA DE ENVIO DEL FORMULARIO */
  onSubmit(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    
    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: {
        'Accept': 'application/json'
      }
    }).then(() => {
      this.isSent.set(true);
      form.reset();
    });
  }
}
