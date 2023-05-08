import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cliente-add-edit',
  templateUrl: './cliente-add-edit.page.html',
  styleUrls: ['./cliente-add-edit.page.scss'],
})
export class ClienteAddEditPage implements OnInit {

  clienteForm!: FormGroup;
  constructor(private FormBuilder: FormBuilder) { }

  ngOnInit() {
    this.clienteForm = this.FormBuilder.group(
      {
        nombre: ["",
          Validators.compose([
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(50),
          ])
        ],
        email: ["",
          Validators.compose([
            Validators.required,
            Validators.email,
          ])
        ],
        telefono: ["",
          Validators.compose([
            Validators.required,
            Validators.maxLength(9),
            Validators.minLength(9),
          ])],
        ingreso: ["",
          Validators.compose([
            Validators.required,
            Validators.maxLength(10),
            Validators.minLength(2),
          ])],
        procedencia: ["",
          Validators.compose([
            Validators.required,
            Validators.maxLength(50),
            Validators.minLength(5),
          ])],

      }
    );
  }
  
  cliente = {
    nombre: "",
    email: "",
    telefono: "",
    ingreso: "",
    procedencia: "",
  };
  submit() {
    console.log(this.cliente);
    this.cliente.nombre = "Pedro";
    this.cliente.email = "999945@gmail.com";
    this.cliente.telefono = "99999";
  }

}
