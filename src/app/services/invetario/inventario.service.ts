import { Injectable } from '@angular/core';
import { HttpClient }from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {

  constructor(private http: HttpClient) { }

  public obtenerProductos () :Promise<any> {
    const url = `${environment.apiUrl}/obtenerProductos`
    return this.http.get(url).toPromise();
  }
  public obtenerProducto(id: number){}
  public agregarProductos(producto: any){}
  public actualizarProductos(producto: any){}
  public eliminarProductos(id: number){}
}
