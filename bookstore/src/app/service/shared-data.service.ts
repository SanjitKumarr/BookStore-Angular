import { Injectable } from '@angular/core';
import {Book} from './book'
@Injectable({
  providedIn: 'root'
})
export class SharedDataService {
  cartList:Book[]=new Array();
  constructor() { }
  setCartList(data: Book[]){
    this.cartList = data;
  }
  getCartList(){
    return this.cartList;
  }
}
