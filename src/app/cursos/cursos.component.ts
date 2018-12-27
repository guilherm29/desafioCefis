import { Component, OnInit } from '@angular/core';
import { Curso } from "./curso/curso.model";
import { CursosService } from "./cursos.service";

@Component({
  selector: 'desafio-cursos',
  templateUrl: './cursos.component.html'
})
export class CursosComponent implements OnInit {

  cursos: Curso[] = [ ];

  constructor(private cursosService: CursosService) { }

  ngOnInit() {
     this.cursosService.cursos()
     .subscribe(cursos => this.cursos = cursos)
  }

}
