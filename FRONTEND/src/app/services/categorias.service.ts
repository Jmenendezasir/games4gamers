import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()

export class CategoriasService {
    url = 'http://127.0.0.1:3999/games4gamers/'

    constructor(
        public _http: HttpClient    
    ){}

    getAll():Observable<any>{
        return this._http.get(this.url + 'categorias/getAll');
    }
    getById(categoriaId:string):Observable<any>{
        return this._http.get(this.url + 'categorias/getById/' + categoriaId);
    }
    new(data:Object):Observable<any>{
        return this._http.post(this.url + 'categorias/new',data);
    }
}