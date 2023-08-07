import { Injectable } from "@angular/core";
import { Cliente } from "./cliente";
import { Observable, of } from "rxjs";
import { clientesData } from "./clientes.json";
import { HttpClient } from "@angular/common/http";

// clase servicio de cliente que tiene la logica de negocio del componente.
@Injectable()
export class ClienteService {

    private urlEndPoint : string = "http://localhost:8080/api/clientes";

    constructor(private http: HttpClient) {}

    getClientes(): Observable<Cliente[]> {
        //return this.http.get<Cliente[]>(this.urlEndPoint);
        return of(clientesData);
    }

}
