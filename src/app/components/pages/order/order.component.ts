import {Component, OnInit} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {ProductService} from "../../../services/product.service";
import {ActivatedRoute} from "@angular/router";
import {OrderType} from "../../../../types/order.types";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  public title: string = ''

  constructor(private fd: FormBuilder,
              private productService: ProductService,
              private activeRoute: ActivatedRoute) {
  }

  orderTrue: boolean = false
  orderFalse: boolean = false

  titles =  this.activeRoute.params.subscribe((params)=>{
    this.title = params['product']
  })

 checkoutForm = this.fd.group({
    product:[ this.title,Validators.required],
    name:['',[Validators.required,Validators.pattern('^[a-zA-ZА-Яа-я]+$')]],
   last_name:['',[Validators.required,Validators.pattern('^[a-zA-ZА-Яа-я]+$')]],
    phone:['',[Validators.required,Validators.pattern('^[+]?[0-9]{11}$')]],
    country:['',Validators.required],
    zip:['',Validators.required],
    address:['',[Validators.required, Validators.pattern('^[А-Яа-яA-Za-z0-9- \/]+$')]],
    comment:[''],
  })

  sendForm():void{
    console.log(this.checkoutForm.value)
    this.productService.createOrder((this.checkoutForm.value as OrderType))
      .subscribe({
        next:(param:{success: number})=>{
          if(param.success){
            this.orderTrue = true;
            this.orderFalse = false;
          }else{
            this.orderTrue = false;
            this.orderFalse = true;
            setTimeout(()=>{
              this.orderFalse = false;
            },3000)}
          error:(error: string) => {
            console.log(error)
          }

        }
      })
  }
}
