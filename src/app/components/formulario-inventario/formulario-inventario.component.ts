import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InventarioModel } from 'src/app/models/inventarios';
import { InventarioService } from 'src/app/services/invetario/inventario.service';

@Component({
  selector: 'app-formulario-inventario',
  templateUrl: './formulario-inventario.component.html',
  styleUrls: ['./formulario-inventario.component.css']
})
export class FormularioInventarioComponent implements OnInit {

  public formGroup: FormGroup = new FormGroup({});
  public productoActualizar: InventarioModel | null = null;

  constructor(private formBuilder: FormBuilder, private invetarioService: InventarioService, private router: Router) { }

  ngOnInit(): void {
    const actualizar = localStorage.getItem('productoActualizar');
    this.productoActualizar = actualizar ? JSON.parse(actualizar) : null;
    this.builForm();
    }

  public builForm(){
    this.formGroup = this.formBuilder.group({
      nombreProducto: [this.productoActualizar ?.nombreProducto, Validators.required],
      tipoProducto: [this.productoActualizar?.tipoProducto, Validators.required],
      cantidadProducto: [this.productoActualizar?.cantidadProducto, Validators.required],
      unidadMedidaProducto: [this.productoActualizar?.unidadMedidaProducto, Validators.required],
      precio: [this.productoActualizar?.precio,Validators.required],
      fechaVencimiento: [this.productoActualizar?.fechaVencimiento,Validators.required]
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
  public actualizarProductos(){
    const producto: InventarioModel={idInventario: this.productoActualizar?.idInventario, ...this.formGroup.value}
    console.log(producto)
    this.invetarioService.actualizarProductos(producto).then(response => {
      if(response.message === 'updated'){
        alert('Cancion actualizada correctamente')
        localStorage.clear();
        this.router.navigate(['/inventario'])
      }
    }).catch(error=>{
      this.router.navigate(['/error']);
    })
  }
}

