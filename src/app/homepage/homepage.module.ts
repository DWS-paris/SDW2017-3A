import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'

// Importer les composants
import { HomepageComponent } from './homepage.component'
import { Routing } from './homepage.route'

@NgModule({
  declarations: [ HomepageComponent ],
  imports: [ Routing, CommonModule ]
})

export class HomepageModule { }