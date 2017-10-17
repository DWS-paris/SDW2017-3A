import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Importer la classe HttpModule pour les requêtes Http
import { HttpModule } from '@angular/http'

// Importer la classe pour manipuler les formulaires
import { FormsModule } from '@angular/forms'

// Importer le composant des routes
import { Routing } from './routes'

// Importer le service utilisé dans plusieurs composants à renseigner dans le tapbleau des providers
import { BlogPostsService } from './services/blog-posts.service'

// Importer les composants de l'application à renseigner dans le tableau des déclarations
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { UniqPostComponent } from './uniq-post/uniq-post.component';
import { AddPostComponent } from './add-post/add-post.component';
import { NavComponent } from './partials/nav/nav.component';
import { CommentsComponent } from './partials/comments/comments.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    UniqPostComponent,
    AddPostComponent,
    NavComponent,
    CommentsComponent
  ],

  // Renseigner la classe des routes dans le tableau des imports
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    Routing
  ],
  
  // Ajouter le/les service/s dans le tableau des providers
  providers: [
    BlogPostsService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
