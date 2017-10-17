import { Component, OnInit } from '@angular/core';

// Importer les classe pour manipuler le formulaire
import { FormControl, FormGroup } from '@angular/forms'

// Importer l'interface PostModel
import { PostModel } from '../data/post.model'

// Importer le service
import { BlogPostsService } from '../services/blog-posts.service'

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html'
})
export class AddPostComponent implements OnInit {

  public uniqPostObject: PostModel

  // Créer des variables pour gérer les erreurs
  public errorTitle: boolean = false
  public errorDescription: boolean = false
  public errorContent: boolean = false
  public errorCover: boolean = false
  
  // Créer une variable pour la validation finale du formulaire
  public formError: number = 0
  public postCreated: boolean = false

  // Créer une variable pour récupérer l'id d'un nouveau post
  public newPostId: number

  constructor(
    // Instancier le service
    private myService: BlogPostsService
  ) 
  { 
    // Ajouter des valeurs vides dans l'objet du formulaire
    this.uniqPostObject = {
      title: '', 
      description: '',
      content: '',
      cover: ''
    }
  }

  // Créer une fonction pour masquer les messages d'erreur
  public hideError(tag: any): void{
    
    switch(tag){
      case 'postTitle': 
        this.errorTitle = false
        break

      case 'postDescription': 
        this.errorDescription = false
        break

      case 'postContent': 
        this.errorContent = false
        break

      default: 
        this.errorCover = false
        break
    }
  }

  // Création d'une fonction pour la soumission du formulaire
  public submitForm(): void{

    // Initialiser la variable formError
    this.formError = 0

    // Vider les message d'erreur à chaque validation
    this.errorContent = this.errorCover = this.errorDescription = this.errorTitle = false
    
    // Vérifier que chacun des paramètres à bien une valeur
    for( let param in this.uniqPostObject ){
      
      // Si la valeur du paramètre est vide
      if(this.uniqPostObject[param].length == 0){

        // Afficher le bon message d'erreur selon le paramètre
        switch(param){
          case 'title':
            this.errorTitle = true

            // Incrémenter la variable formError
            this.formError++

            break

          case 'description':
            this.errorDescription = true
            // Incrémenter la variable formError
            this.formError++
            break
          
          case 'content':
            this.errorContent = true
            // Incrémenter la variable formError
            this.formError++
            break

          default:
            this.errorCover = true
            // Incrémenter la variable formError
            this.formError++
            break
        }

      }
    }

    // Validation finale du formulaire
    if( this.formError === 0 ){
      /*
      Créer un nouveau post dans l'API
      Vider l'objet utilisé dans le formulaire
      Soit retourner sur la page d'accueil, soit afficher l'article
      */

      // Enregistrer le post
      this.myService.addNewPost(this.uniqPostObject).then(
        data => {
          console.log(data)
          // Réinitialiser l'objet uniqPostObject
          this.uniqPostObject = {
            title: '',
            description: '',
            content: '',
            cover: ''
          }

          // Définir l'id du nouveau post
          this.newPostId = data.id

          // Changer la variable postCreated
          this.postCreated = true
        },
        error => console.log(error)
      )


    }
  }

  ngOnInit() {
  }

}
