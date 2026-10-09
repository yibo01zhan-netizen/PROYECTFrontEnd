import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Product } from '../Models/Product';

@Service()
export class ProductServices {
    private httpClient = inject(HttpClient)
    private urlBase = environment.apiUrl;

    GetProducts(){
        return this.httpClient.get<Product[]>(this.urlBase + 'Producto/GetProductos')
    }

    CreateProduct(item : Product){
        return this.httpClient.post(this.urlBase + 'Producto/CreateProducto', item, { responseType: 'text'})
    }

    DeleteProduct(id : number){
    return this.httpClient.delete(this.urlBase + 'Producto/DeleteProducto/' + id, {responseType: 'text'})
    }

    UpdateProduct(item : Product){
        return this.httpClient.put(this.urlBase + 'Producto/UpdateProducto/' + item.id, item, {responseType: 'text'})
    }

    GetProduct(id : number){
        return this.httpClient.get<Product>(this.urlBase + 'Producto/GetProducto/' + id)
    }
}
