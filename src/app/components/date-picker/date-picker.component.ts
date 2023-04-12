import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent implements OnInit {

  formularioReserva: FormGroup= new FormGroup({});

  constructor(private formBuilder: FormBuilder){ 

    const hoy = new Date();
    const mes = hoy.getMonth();
    const anio = hoy.getFullYear(); 
    
    this.formularioReserva= this.formBuilder.group({
       
      desde: new FormControl(new Date(anio, mes, 1)),
      hasta: new FormControl(new Date(anio, mes, 7)),
    })

  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
   
  }

}
