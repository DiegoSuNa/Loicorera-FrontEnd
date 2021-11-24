import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InventarioService } from 'src/app/services/invetario/inventario.service';

@Component({
  selector: 'app-formulario-inventario',
  templateUrl: './formulario-inventario.component.html',
  styleUrls: ['./formulario-inventario.component.css']
})
export class FormularioInventarioComponent implements OnInit {

  public formGroup: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder, private invetarioService: InventarioService, private router: Router) { }

  ngOnInit(): void {
    this.builForm();
    }

  public builForm(){
    this.formGroup = this.formBuilder.group({
      nombreProducto: ['', Validators.required],
      tipoProducto: ['', Validators.required],
      cantidadProducto: ['', Validators.required],
      unidadMedidaProducto: ['', Validators.required],
      precio: ['',Validators.required],
      fechaVencimiento: ['',Validators.required]
    })
  }
  public agregarProductos(){
    this.invetarioService.agregarProductos(this.formGroup.value).then(response => {
      alert('Producto creado correctamente')
      this.router.navigate(['/inventario'])
    }).catch(error => {
      this.router.navigate(['/error']);
    })
  }
}

