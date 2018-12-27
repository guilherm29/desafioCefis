import {Curso} from "./curso/curso.model";
import { Desafio_api } from "../app.api";
import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
@Injectable()
export class CursosService {

   
    constructor(private http: Http){ }



// recebe os dados da api

cursos(): Observable < Curso[] > {
    return this.http.get(`https://cefis.com.br/api/v1/event/1139?include=classes`)
    .map(response => response.json())
    .map(data=> data.data)
    
}
cursoById(id: string) : Observable<Curso>{
    return this.http.get(`${Desafio_api}/cursos/${id}?include=classes)`)
    .map(response => response.json())
    .map(data=> data.data )
    
}






}//fim

