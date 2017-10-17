import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

// Importer les composants
import { AddPostComponent } from './add-post.component'
import { Routing } from './add-post.route'

@NgModule({
  declarations: [ AddPostComponent ],
  imports: [ Routing, CommonModule, FormsModule ]
})

export class AddPostModule { }