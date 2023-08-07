import { Component } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html'
})
export class DirectivaComponent {

  listaCurso: string[] = ['Typescript', 'Angular', 'java'];
  habilitar: boolean = true;

  setHabilitar(): void {
    this.habilitar = (this.habilitar)? false: true;
  }

}
