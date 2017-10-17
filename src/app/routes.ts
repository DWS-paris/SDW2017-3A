// Importer les classes pour définir les routes
import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'


// Créer une constante pour définir le comportement des routes
const appRoutes: Routes = [
    /*
        Définir une route : Créer un objet avec path et component
    */
    {
        path: '',
        loadChildren: './homepage/homepage.module#HomepageModule'
    },
    {
        path: 'add',
        loadChildren: './add-post/add-post.module#AddPostModule'
    },
    {
        // Ajouter un paramètre dans la route :id
        path: 'post/:id',
        loadChildren: './uniq-post/uniq-post.module#UniqPostModule'
    }
]

// Exporter une autre constante pour utiliser les routes
export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes)