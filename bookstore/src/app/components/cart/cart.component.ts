import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/service/book';
import { CrudService } from 'src/app/service/crud.service';
import { SharedDataService } from 'src/app/service/shared-data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartList: Book[] = new Array();
  isCartEmpty: boolean = true;
  cartTotal: number = 0;

  constructor(private sharedData: SharedDataService, private crudApi: CrudService) { }

  ngOnInit(): void {
    this.cartList = this.sharedData.getCartList();
    console.log(this.cartList);
    if (this.cartList.length > 0) {
      this.isCartEmpty = false;
      for(let i in this.cartList) {
        this.cartTotal+=parseInt(this.cartList[i].price);
      }
    } else {
      this.isCartEmpty = true;
    }
    console.log(this.cartTotal);

    // this.crudApi.getBookById(this.cartList[0]).subscribe(res =>{
    //   this.Books=res;
    //   console.log(typeof res);
    // });

  }
  clearCart(){
    this.cartList=[];
    this.isCartEmpty=true;
  }


}
