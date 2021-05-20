import { Component, OnInit } from '@angular/core';
import { CategoriasService } from 'src/app/services/categorias.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
  providers: [
    CategoriasService,
  ],
})
export class NewComponent implements OnInit {
  name: string = "";
  description: string = "";
  constructor(
    private _categoriasService: CategoriasService,
  ) { }
    save(){
      let finalData = {
        name: this.name,
        description: this.description,
      };
      this._categoriasService.new(finalData).subscribe(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        }
      )
    }

  

  ngOnInit(): void {
  }

}