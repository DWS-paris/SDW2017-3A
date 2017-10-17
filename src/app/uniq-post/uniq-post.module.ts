import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

// Importer les composants
import { UniqPostComponent } from './uniq-post.component'
import { Routing } from './uniq-post.route'
import { CommentsComponent } from '../partials/comments/comments.component';

@NgModule({
  declarations: [ UniqPostComponent, CommentsComponent ],
  imports: [ Routing, CommonModule, FormsModule ]
})

export class UniqPostModule { }