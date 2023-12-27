import {Component, OnInit} from '@angular/core';
import {ProductType} from "../../../types/product.types";
import {ProductService} from "../../shared/services/product.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
 public products: ProductType[] = [];


  constructor(private productService: ProductService) {

  }

  ngOnInit(): void {
this.productService.getProducts()
  .subscribe((products: any) => {
    this.products = products
    console.log(this.products)
  })
  }
}
