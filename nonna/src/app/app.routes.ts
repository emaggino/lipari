import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { PdpComponent } from './components/pdp/pdp.component';
import { ListComponent } from './components/list/list.component';
import { EditComponent } from './components/edit/edit.component';
import { TipiComponent } from './components/tipi/tipi.component';
import { SecondiComponent } from './components/secondi/secondi.component';

export const routes: Routes = [
    {path: '' , component: ListComponent},
    {path: 'login' , component: LoginComponent},
    {path: 'pdp/:id' , component: PdpComponent},
    {path: 'home' , component: HomepageComponent},
    {path: 'edit' , component: EditComponent},
    {path: 'tipi', component: TipiComponent},
    {path: 'secondi', component: SecondiComponent}
];
