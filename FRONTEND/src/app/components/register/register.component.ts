import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [UsuariosService],
})
export class RegisterComponent implements OnInit {
  username: String = "";
  password: String = "";
  password1: String = "";
  email: String = "";
  constructor(
    private _usuariosService: UsuariosService,
    private _router: Router,
  ) { }
    save(){
      let finalData = {
        username: this.username,
        password: this.password,
        password1: this.password1,
        email: this.email
      };
      if (finalData.password == finalData.password1) {
        this._usuariosService.new(finalData).subscribe(
          response => {
            console.log(response);
            if(response.status != "error") {
              this._router.navigateByUrl('/registerOk'); 
            }
          },
          error => {
            console.log(error);
          }
        )
      }
      else {
        console.log("Las contraseñas no son iguales");
      }
    }

  

  ngOnInit(): void {
  }

}