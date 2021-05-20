import { Component, OnInit } from '@angular/core';
import { CategoriasService } from 'src/app/services/categorias.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss'],
  providers: [CategoriasService],
})
export class CategoriasComponent implements OnInit {

  public categorias = null;
  constructor(
    private _categoriasService: CategoriasService,
  ) { }

  ngOnInit() {
    this._categoriasService.getAll().subscribe(
      response => {
        this.categorias = response.categorias
        console.log(this.categorias)
      },
      error => {
        console.log(error)
      }
    )
  }

}
