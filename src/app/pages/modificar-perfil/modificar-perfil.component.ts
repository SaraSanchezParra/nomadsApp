import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-modificar-perfil',
  templateUrl: './modificar-perfil.component.html',
  styleUrls: ['./modificar-perfil.component.css']
})
export class ModificarPerfilComponent implements OnInit {

  myForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      nombreUsuario: ['', [Validators.required, Validators.pattern(/^@/)]],
      email: ['', [Validators.required, Validators.email]],
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      foto: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      password2: ['', [Validators.required, this.matchPassword.bind(this)]]
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
      console.log(this.myForm.value);
      // Aquí iría la lógica para modificar el perfil del usuario
    }
  }

}

//JS para mostrar la imagen en modificar perfil
//function mostrarImagen() {
//   let imagen = document.getElementById("imagenInput").value;
//   document.getElementById("perfilImg").src = imagen;
// }