import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PersonaService } from '../persona.service';
import { Persona } from '../model/persona';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  form:FormGroup;

  constructor(private service:PersonaService, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.form=this.fb.group({
      nombre:['', Validators.required],
      apellido: ['', Validators.required],
      email:['', [Validators.required, Validators.email]],
      password:['', Validators.required]
    })
  }

  enviar(persona:Persona){
    this.service.save(persona).subscribe(()=>{
      console.log("Enviando los datos");
    })
  }

}