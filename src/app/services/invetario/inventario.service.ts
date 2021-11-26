import { Injectable } from '@angular/core';
import { HttpClient }from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { InventarioModel } from 'src/app/models/inventarios';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {

  constructor(private http: HttpClient) { }

  public obtenerProductos() :Promise<any> {
    const url = `${environment.apiUrl}/obtenerProductos`
    return this.http.get(url).toPromise();
  }
  public obtenerProducto(id: number){}
  public agregarProductos(producto: any){
    const url =`${environment.apiUrl}/agregarProductos`
    return this.http.post(url, producto).toPromise();
  }
  public actualizarProductos(producto: InventarioModel): Promise<any>{
    const url = `${environment.apiUrl}/actualizarProductos/${producto.idInventario}`
    return this.http.put(url, producto).toPromise();
  }
  
  public eliminarProductos(id: number):Promise<any> {
    return this.http.delete(`${environment.apiUrl}/eliminarProductos/${id}`).toPromise();
  }
}
