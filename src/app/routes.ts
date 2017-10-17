// Importer les classes pour définir les routes
import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

// Importer les composants à utiliser dans les routes
import { HomepageComponent } from './homepage/homepage.component'
import { AddPostComponent } from './add-post/add-post.component'
import { UniqPostComponent } from './uniq-post/uniq-post.component'

// Créer une constante pour définir le comportement des routes
const appRoutes: Routes = [
    /*
        Définir une route : Créer un objet avec path et component
    */
    {
        path: '',
        component: HomepageComponent
    },
    {
        path: 'add',
        component: AddPostComponent
    },
    {
        // Ajouter un paramètre dans la route :id
        path: 'post/:id',
        component: UniqPostComponent
    }
]

// Exporter une autre constante pour utiliser les routes
export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes)