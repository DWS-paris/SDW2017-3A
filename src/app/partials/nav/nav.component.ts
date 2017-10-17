import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  template: `
    <nav>
      <ul>
        <li>
          <!-- Utliser la directive pour naviger dans les routes -->
          <!-- <router-link to='add'>Ajouter un article</router-link> -->
          <a routerLink="/">Accueil</a>
        </li>
        <li>
          <a routerLink="/add">Ajouter un post</a>
        </li>
      </ul>
    </nav>
  `
})
export class NavComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
