import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {ProductType} from "../../types/product.types";
import {OrderType} from "../../types/order.types";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: ProductType[] = [];

  constructor(private http: HttpClient) {
  }

  getProducts(): Observable<ProductType[]> {
    return this.http.get<ProductType[]>('https://testologia.site/tea')
      .pipe(
        tap((result) => {
          console.log(result)
        })
      )
  }

  getProduct(id: number): Observable<ProductType> {
    return this.http.get<ProductType>(`https://testologia.site/tea?id=${id}`)
      .pipe(
        tap((result)=>{
          console.log(result)
        })
      )
  }

  createOrder(body: OrderType): Observable<{success: number}>{
    return this.http.post<{success:number}>(`https://testologia.site/order-tea`,body)
  }


}
