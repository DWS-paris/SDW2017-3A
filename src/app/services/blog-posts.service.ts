// Importer la classes pour configurer le service
import { Injectable } from '@angular/core'

// Importer les classes pour le requêtes HTTP
import { Http, Response } from '@angular/http'

// Importer le système de promise depuis rxjs
import 'rxjs/add/operator/toPromise'

// Importer l'interface d'objet
import { PostModel } from '../data/post.model'

@Injectable()
export class BlogPostsService {

  private apiUrl: string = `http://localhost:3000/posts`

  constructor(
    // Injecter une variable de type Http dans le service
    private http: Http
  ) { }

  /*
  Créer une fonction typée en promise pour afficher récupérer le contenu de l'API. La promise utilise des fonctions get, toPromise, then et catch
  */
  public getBlogPosts(): Promise<PostModel[]> {
    return this.http.get(this.apiUrl).toPromise().then(this.getDataFromApi).catch(this.handleError)
  }

  // Créer une fonction pour charger un post unique
  public getUniqPost(id: number): Promise<PostModel> {
    return this.http.get(`${this.apiUrl}/${id}`).toPromise().then(this.getDataFromApi).catch(this.handleError)
  }

  // Créer une fonction pour ajouter une entrée dans l'API
  public addNewPost(obj: PostModel): Promise<PostModel>{
    return this.http.post(this.apiUrl, obj).toPromise().then(this.getDataFromApi).catch(this.handleError)
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
