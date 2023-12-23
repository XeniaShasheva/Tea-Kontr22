import {Component, OnInit} from '@angular/core';
import {ProductType} from "../../../../types/product.types";
import {ProductService} from "../../../services/product.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public product: ProductType = {} as ProductType

  constructor(
    public productService: ProductService,
    private activateRoute: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit(): void {
    this.activateRoute.params.subscribe((params) => {
      console.log(params['id'] + 'this')
      if (params['id']) {
        this.productService.getProduct(params['id'])
          .subscribe({
            next: (data) => {
              this.product = data
            },
            error: (err) => {
              this.router.navigate(['/'])
            }
          })
      }
    })
  }

}
