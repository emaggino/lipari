import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { PdpComponent } from './components/pdp/pdp.component';
import { ListComponent } from './components/list/list.component';
import { EditComponent } from './components/edit/edit.component';
import { TipiComponent } from './components/tipi/tipi.component';
import { SecondiComponent } from './components/secondi/secondi.component';
import { DolciComponent } from './components/dolci/dolci.component';
import { FruttaComponent } from './components/frutta/frutta.component';
import { AddComponent } from './components/add/add.component';
import { SearchComponent } from './components/search/search.component';
import { PreferitiComponent } from './components/preferiti/preferiti.component';

export const routes: Routes = [
    {path: '' , component: ListComponent},
    {path: 'login' , component: LoginComponent},
    {path: 'pdp/:recipeId' , component: PdpComponent},
    {path: 'home' , component: HomepageComponent},
    {path: 'edit/:recipeId' , component: EditComponent},
    {path: 'tipi', component: TipiComponent},
    {path: 'secondi', component: SecondiComponent},
    {path: 'dolci' , component: DolciComponent},
    {path: 'frutta', component: FruttaComponent},
    {path: 'add', component: AddComponent},
    {path: 'search/:titolo', component: SearchComponent},
    {path: 'preferiti', component: PreferitiComponent}
];
