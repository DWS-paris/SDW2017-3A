// Importer la classes pour configurer le service
import { Injectable } from '@angular/core'

// Importer les classes pour le requêtes HTTP
import { Http, Response } from '@angular/http'

// Importer le système de promise depuis rxjs
import 'rxjs/add/operator/toPromise'

// Importer l'interface CommentModel
import { CommentModel } from '../data/comment.model'

@Injectable()
export class PostCommentService {

  // Créer une variable pour l'adresse de l'API
  private apiUrl: string = 'http://localhost:3000/comments?postId='

  constructor(
    // Injecter une variable de type Http dans le service
    private http: Http
  ) { }

  
  // Créer une fonction pour afficher les commentaires
  public getPostComment(id: number): Promise<any[]> {
    return this.http.get(this.apiUrl + id).toPromise().then(this.getDataFromApi).catch(this.handleError)
  }

  // Créer une fonction pour ajouter une commentaire
  public addNewComment(newComment: CommentModel): Promise<CommentModel>{
    return this.http.post(this.apiUrl, newComment).toPromise().then(this.getDataFromApi).catch(this.handleError)
  }


  // Créer une fonction pour traiter le retour de l'API
  private getDataFromApi(res: Response){
    return res.json() || {}
  }

  // Créer une fonction pour traiter les erreurs de requête
  private handleError(err: any){
    return Promise.reject(err)
  }


}

