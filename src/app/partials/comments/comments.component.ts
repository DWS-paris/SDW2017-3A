import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html'
})

export class CommentsComponent implements OnInit {

  // Utiliser le décorateur @Input pour récupérer des données depuis le composant parent
  @Input() postComment  

  constructor(){}

  ngOnInit() {}

}
