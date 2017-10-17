// Importer les classes pour définir les routes
import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

// Importer les composants à utiliser dans les routes
import { UniqPostComponent } from './uniq-post.component'

// Créer une constante pour définir le comportement des routes
const appRoutes: Routes = [
    {
        path: '',
        component: UniqPostComponent
    }
]

// Exporter une autre constante pour utiliser les routes
export const Routing: ModuleWithProviders = RouterModule.forChild(appRoutes)