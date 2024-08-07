import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SucursalesService {

  constructor(
    private http: HttpClient
  ) { }


  getAllSucursales(){
      return this.http.get<any>(`${environment.API}/rentacar/sucursales/cargarSucursales`);
  }

}
