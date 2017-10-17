import { Component, OnInit } from '@angular/core';

// Importer le service pour utiliser ses méthodes
import { BlogPostsService } from '../services/blog-posts.service'

// Importer l'interface PostModel
import { PostModel } from '../data/post.model'

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styles: []
})
export class HomepageComponent implements OnInit {

  public dataArray: Array<PostModel>
  public errorCode: any

  constructor(
    // Injecter la classe du service
    private myService: BlogPostsService
  ){}

  // Créer une fonction pour récupérer les données de l'API
  private getData(){
    this.myService.getBlogPosts().then( 
      data => this.dataArray = data,
      error => this.errorCode = error
    )
  }

  ngOnInit() {
    this.getData()
  }

}
