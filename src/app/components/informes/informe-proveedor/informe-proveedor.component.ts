import { Component, OnInit } from '@angular/core';
import { InventarioService } from 'src/app/services/invetario/inventario.service';
import { ProveedorService } from 'src/app/services/proveedor/proveedor.service';

@Component({
  selector: 'app-informe-proveedor',
  templateUrl: './informe-proveedor.component.html',
  styleUrls: ['./informe-proveedor.component.css']
})
export class InformeProveedorComponent implements OnInit {

  constructor(private proveedorService: ProveedorService) { }

  ngOnInit(): void {
    console.log('controlador')
    this.obtenerInformesProveedores();
  }
 
  public async obtenerInformesProveedores(){
   try{
   const response = await this.proveedorService.obtenerInformesProveedores();
    console.log(response)
   }catch(error){
     console.log(error)

   }
  }

}
