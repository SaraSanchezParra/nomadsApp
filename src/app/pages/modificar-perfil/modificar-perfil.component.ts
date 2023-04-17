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
      nombreUsuario: [this.userService.user_logged.username, [Validators.required, Validators.pattern(/^@/)]],
      email: [this.userService.user_logged.email, [Validators.required, Validators.email]],
      nombre: [this.userService.user_logged.name, [Validators.required]],
      apellido: [this.userService.user_logged.surname, [Validators.required]],
      foto: [this.userService.user_logged.photo],
      password: ['', [Validators.minLength(8)]],
      password2: ['', [this.matchPassword.bind(this)]],
      descripcion: [this.userService.user_logged.descripcion]
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
    this.userService.user_logged.name= this.myForm.get('nombre')?.value;
    this.userService.user_logged.surname= this.myForm.get('apellido')?.value;
    this.userService.user_logged.email= this.myForm.get('email')?.value;
    this.userService.user_logged.descripcion= this.myForm.get('descripcion')?.value;
    this.userService.user_logged.photo= this.myForm.get('foto')?.value;
    this.userService.modificarUser(this.userService.user_logged).subscribe(
      () => {
        this.toastr.success('Usuario modificado correctamente')
        this.router.navigate(['/perfil']);
      
      }
    );
  }
    
  }
  irPerfil(){
    this.router.navigateByUrl("/perfil")}
    
      
   
  }
