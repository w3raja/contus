import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasketService {
  

  basketList:any=[];
  localData:any = [];


  getLength() { 
    let getLocalData = localStorage.getItem("basket") 
    this.localData = JSON.parse(getLocalData || "{}");
    console.log("LLLL", this.localData.length+1);
  } 
  

 
  addItem(item:any){
        this.getLength();
        this.basketList.push(item);
        const string = JSON.stringify(this.basketList);
        localStorage.setItem("basket",string);
        
  }

  addExtraItem(item:any){
        this.localData.push(item);
        const string = JSON.stringify(this.basketList);
        localStorage.setItem("basket",string);
  }

  addBasket(bulkItems:any){
        const string = JSON.stringify(bulkItems);
        localStorage.setItem("basket",string);
  }



}
