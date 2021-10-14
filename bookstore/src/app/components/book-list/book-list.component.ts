import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/service/book';
import { CrudService } from 'src/app/service/crud.service';
import { SharedDataService } from 'src/app/service/shared-data.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  Books:any=[];
  cartList:Book[]=new Array();
  searchValue:string="";
  constructor(private crudApi:CrudService,private sharedData:SharedDataService) { }

  ngOnInit(): void {
    this.crudApi.getBooks().subscribe(res => {
      console.log(res);
      this.Books=res;
    });
  }
  addToCart(data:Book){
    this.cartList.push(data);
    console.log(this.cartList);
    this.sharedData.setCartList(this.cartList);
  }
  
}
