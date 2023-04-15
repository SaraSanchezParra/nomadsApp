import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { DatosUsuarioService } from 'src/app/services/datos-usuario.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-modificar-perfil',
  templateUrl: './modificar-perfil.component.html',
  styleUrls: ['./modificar-perfil.component.css']
})
export class ModificarPerfilComponent implements OnInit {

  myForm: FormGroup;

  constructor(private router:Router, private fb: FormBuilder, public userService: DatosUsuarioService, private toastr: ToastrService) { }

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
    const { user_name, email, name, surname, foto, descripcion, password } = this.myForm.value;

    this.userService.modificarUser(this.userService.user).subscribe(
      () => {
        this.toastr.success('El usuario se ha modificado correctamente')
        this.router.navigate(['/perfil']);
      
      }
    );
  }
    const nombre = this.myForm.value.nombre;
    const apellido = this.myForm.value.apellido;
    const email1 = this.myForm.value.email;
    const username = this.myForm.value.nombreUsuario;
    const descripcion1 = this.myForm.value.descripcion;
    const foto1 = this.myForm.value.foto;
    this.userService.user.name = nombre;
    this.userService.user.surname = apellido;
    this.userService.user.email = email1;
    this.userService.user.username = username;
    this.userService.user.descripcion = descripcion1;
    this.userService.user.photo = foto1;
  }
  irPerfil(){
    this.router.navigateByUrl("/perfil")}
    
      
   
  }
