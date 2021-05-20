import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriasService } from 'src/app/services/categorias.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.scss'],
  providers: [CategoriasService],
})
export class CategoriaComponent implements OnInit {
  public categoriaId = '';

  public categoria = {
    name: String,
    description: String,
  };


  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _categoriasService: CategoriasService
  ) {}

  ngOnInit() {
    this.categoriaId = this._activatedRoute.snapshot.params.categoriaId;
    this._categoriasService.getById(this.categoriaId).subscribe(
      response => {
        this.categoria.name = response.categoria.name;
        this.categoria.description = response.categoria.description;
      },
      error => {
        console.log(error);
      }
    )
  
  }

}
