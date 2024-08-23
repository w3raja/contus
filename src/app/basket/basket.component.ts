import { Component, OnInit } from '@angular/core';
import { BasketService } from '../service/basket.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-basket',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.css'
})
export class BasketComponent implements OnInit {

  constructor(private bs:BasketService){}

  localData:any="";
  clonedData:any = [];

  removedData:any = [];
  

  ngOnInit() {
        let getLocalData = localStorage.getItem("basket") 
        this.localData = JSON.parse(getLocalData || "{}");

        this.clonedData =  structuredClone(this.localData)
        // console.log("Local: ", this.localData);
        // this.clonedData[0].removed = true;
        // console.log("Cloned: ", this.clonedData);
  }

  remove(index:any,item:any){
    // this.removedData.push(item);
    // const string = JSON.stringify(this.removedData);
    // localStorage.setItem("removed",string);
    console.log(index);
    this.clonedData.splice(index,1);
    console.log(this.clonedData);

    this.removedData.push(item);
    console.log(this.removedData);

    this.bs.addBasket(this.clonedData);
  }
  add(index:any,item:any){
      this.clonedData.push(item);
      this.removedData.splice(index,1);

      this.bs.addBasket(this.clonedData);
  }


}
