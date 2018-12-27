import { Component, OnInit, Input } from '@angular/core';
import { Curso } from "./curso.model";

@Component({
  selector: 'desafio-curso',
  templateUrl: './curso.component.html'
})
export class CursoComponent implements OnInit {

  @Input() curso: Curso;

  constructor() { }

  ngOnInit() {
  }

}
