import { Component } from '@angular/core';

@Component({
  selector: 'app-root',

  template: `
    <!-- Ajouter le partial nav.component -->
    <app-nav></app-nav>
    
    <!-- Utiliser la directive pour afficher le contenu des routes -->
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  public title: string = 'app';
}