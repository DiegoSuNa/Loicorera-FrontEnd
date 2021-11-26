import { Component, OnInit } from '@angular/core';
import { InventarioService } from 'src/app/services/invetario/inventario.service';
import { Router } from '@angular/router';
import { InventarioComponent } from '../inventario/inventario.component';
import { InventarioModel } from 'src/app/models/inventarios'

@Component({
  selector: 'app-tabla-inventario',
  templateUrl: './tabla-inventario.component.html',
  styleUrls: ['./tabla-inventario.component.css']
})
export class TablaInventarioComponent implements OnInit {

  public inventarios: InventarioModel[] = [];

  constructor(private invetarioService: InventarioService, private router: Router) { }

  async ngOnInit(): Promise<void> {
    this.inventarios = await this.obtenerProductos();
  }

  public async obtenerProductos(): Promise<any>{
   try{
   const response = await this.invetarioService.obtenerProductos();
    return response.data;
   }catch(error){
     this.router.navigate(['/error'])

   }
  }

  public eliminarProductos(id:number){
    this.invetarioService.eliminarProductos(id).then(async response => {
      if(response.message === 'deleted'){
        this.inventarios = await this.obtenerProductos();
        alert('Producto eliminado correctamente');
      }
    }).catch(error => {
      this.router.navigate(['/error']);
    })
  }
  public irActualizarProducto(producto: InventarioModel){
    localStorage.setItem('productoActualizar', JSON.stringify(producto));
    this.router.navigate(['/formulario-inventario']);
  }
}

