import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

// Importer l'interface CommentModel
import { CommentModel } from '../../data/comment.model'

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html'
})

export class CommentsComponent implements OnInit {

  // Utiliser le décorateur @Input pour récupérer des données depuis le composant parent
  @Input() postComment: CommentModel
  @Input() uniqPostId: number
  @Input() newComment: CommentModel

  // Envoyer des données dans le composant parent
  @Output() sendComment: EventEmitter<CommentModel> = new EventEmitter
  
  

  // Ecrire la fonction de traitement du formulaire
  public submitNewComment(): void{
    
    // Vérifier le contenu de l'objet newComment
    if(this.newComment.author != '' && this.newComment.content != ''){

      // Envoyer l'objet dans le service, via le composant principal
      this.sendComment.emit(this.newComment)
    }

  }

  constructor(){}

  ngOnInit() {}

}
