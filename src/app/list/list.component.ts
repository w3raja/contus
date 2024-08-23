import { Component, OnInit } from '@angular/core';
import { CartsService } from '../service/carts.service';
import { CurrencyPipe } from '@angular/common';
import { BasketService } from '../service/basket.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit{

  constructor(private cartService : CartsService, private bs:BasketService){}

  data:any;
  carts:any;
  singleUser:any;
  showList:boolean = false;

  userProduct:any;
  dataLenght: any;

  ngOnInit() {
    this.cartService.getProducts().subscribe((data)=>{
      this.data = data;
      this.carts = data.carts;
      console.log(this.data);
      console.log(this.carts);
    })
  }

  getUser(id:any){
    console.log(id);
    this.singleUser = this.carts[id];
    console.log(this.singleUser);
    this.userProduct = this.singleUser.products; 
    this.showList = true;   
}

cartList:any = [];

addCart(item:any){
  this.cartList.push(item);
  this.bs.addItem(item);
}

}
