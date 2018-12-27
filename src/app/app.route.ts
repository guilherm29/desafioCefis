import {Routes} from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { CursosComponent } from "./cursos/cursos.component";
import { CursosDetailComponent } from "./cursos-detail/cursos-detail.component";
export const ROUTES: Routes = [

    //{path: '', component: HomeComponent},
    {path:'', component: CursosComponent},
    {path:'cursos/id', component: CursosDetailComponent}
]