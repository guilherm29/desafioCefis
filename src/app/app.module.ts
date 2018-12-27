import { ROUTES } from './app.route';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursoComponent } from "./cursos/curso/curso.component";
import { CursosService } from "./cursos/cursos.service";
import { CursosDetailComponent } from "./cursos-detail/cursos-detail.component";
import { MenuComponent } from "./cursos-detail/menu/menu.component";
import { MenuItemComponent } from "./cursos-detail/menu-item/menu-item.component";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CursosComponent,
    CursoComponent,
    CursosDetailComponent,
    MenuComponent,
    MenuItemComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [CursosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
