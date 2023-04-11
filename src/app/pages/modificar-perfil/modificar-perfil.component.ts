import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { DatosUsuarioService } from 'src/app/services/datos-usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modificar-perfil',
  templateUrl: './modificar-perfil.component.html',
  styleUrls: ['./modificar-perfil.component.css']
})
export class ModificarPerfilComponent implements OnInit {

  myForm: FormGroup;

  constructor(private router:Router, private fb: FormBuilder, public userService: DatosUsuarioService) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      nombreUsuario: [this.userService.user.username, [Validators.required, Validators.pattern(/^@/)]],
      email: [this.userService.user.email, [Validators.required, Validators.email]],
      nombre: [this.userService.user.name, [Validators.required]],
      apellido: [this.userService.user.surname, [Validators.required]],
      foto: [this.userService.user.photo],
      password: ['', [Validators.minLength(8)]],
      password2: ['', [this.matchPassword.bind(this)]],
      descripcion: [this.userService.user.descripcion]
    });
  }

  matchPassword(control: FormControl): { [s: string]: boolean } {
    if (!control.root || !control.root.value) {
      return null;
    }

    const password = control.root.value.password;
    const confirmPassword = control.value;
    if (confirmPassword === '') {
      return null;
    }

    if (password !== confirmPassword) {
      return { matchPassword: true };
    }

    return null;
  }



  modificar() {
    if (this.myForm.valid) {
      this.router.navigate(['/perfil']);
      
    }
    else{

      console.log("data error")
    }
    const nombre = this.myForm.value.nombre;
    const apellido = this.myForm.value.apellido;
    const email = this.myForm.value.email;
    const username = this.myForm.value.nombreUsuario;
    const descripcion = this.myForm.value.descripcion;
    const foto = this.myForm.value.foto;
    this.userService.user.name = nombre;
    this.userService.user.surname = apellido;
    this.userService.user.email = email;
    this.userService.user.username = username;
    this.userService.user.descripcion = descripcion;
    this.userService.user.photo = foto;
  }
  irPerfil(){
    this.router.navigateByUrl("/perfil")}
    
      
   
  }



//JS para mostrar la imagen en modificar perfil
//function mostrarImagen() {
//   let imagen = document.getElementById("imagenInput").value;
//   document.getElementById("perfilImg").src = imagen;
// }