import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Email } from 'src/app/models/email';
import { ContactanosService } from 'src/app/services/contactanos.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {

  public myForm: FormGroup;
  public emails: Email;
  public enviado: Boolean = false;

  constructor(private formBuilder: FormBuilder, private contactanosService: ContactanosService, private toastr: ToastrService) {
    this.buildForm()
  }


  private buildForm() {

    this.myForm = this.formBuilder.group({

      nombre: ['', Validators.required],
      asunto: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mensaje: ['', Validators.required]
    });
  }
  enviarCorreo(): void {
    const data: Email = {
      nombre: this.myForm.get('nombre').value,
      asunto: this.myForm.get('asunto').value,
      email: this.myForm.get('email').value,
      mensaje: this.myForm.get('mensaje').value
    };
    this.contactanosService.enviarCorreo(data).subscribe(emails => {
      console.log(emails);
      this.emails = emails;
      this.enviado = true;
      this.myForm.reset();
      this.toastr.success('Mensaje enviado con éxito.');
    }, error => {
      console.log(error);
      this.toastr.error('Error al enviar el mensaje.');
    });

  }

}

