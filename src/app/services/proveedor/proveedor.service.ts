import { Injectable } from '@angular/core';
import { HttpClient }from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  constructor(private http: HttpClient) { }
  public obtenerInformesProveedores () :Promise<any> {
    const url = `${environment.apiUrl}/obtenerInformesProveedores`
    return this.http.get(url).toPromise();
  }
  public obtenerInformesProveedor(id: number){}
  public agregarInformesProveedor(producto: any){}
  public actualizarInformesProveedor(producto: any){}
  public eliminarInformesProveedor(id: number){}

}


