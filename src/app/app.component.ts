import {Component, OnInit} from "@angular/core"

@Component({
  selector: 'desafio-root',
  templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

  content = 'Desafio CEFIS'

  constructor() { }

  ngOnInit() {
  }

}
