import { Component, OnInit } from '@angular/core';
import { CursosService } from "../cursos/cursos.service";
import { Curso } from "../cursos/curso/curso.model";
import {ActivatedRoute} from '@angular/router'

@Component({
  selector: 'desafio-cursos-detail',
  templateUrl: './cursos-detail.component.html'
})
export class CursosDetailComponent implements OnInit {

  curso: Curso
  constructor(private cursosService: CursosService,
  private route: ActivatedRoute) { }

  ngOnInit() {

    this.cursosService.cursoById(this.route.snapshot.params['id'])
    .subscribe(curso => this.curso = curso)
  }

}
