import { Component, OnInit } from '@angular/core';
import { InventarioService } from 'src/app/services/invetario/inventario.service';
import { InventarioComponent } from '../inventario/inventario.component';

@Component({
  selector: 'app-tabla-inventario',
  templateUrl: './tabla-inventario.component.html',
  styleUrls: ['./tabla-inventario.component.css']
})
export class TablaInventarioComponent implements OnInit {

  constructor(private invetarioService: InventarioService) { }

  ngOnInit(): void {
    console.log('controlador')
    this.obtenerProductos();
  }
 
  public async obtenerProductos(){
   try{
   const response = await this.invetarioService.obtenerProductos();
    console.log(response)
   }catch(error){
     console.log(error)

   }
  }

}
