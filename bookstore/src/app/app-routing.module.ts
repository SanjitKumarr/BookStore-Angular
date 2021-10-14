import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookComponent } from './components/add-book/add-book.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { CartComponent } from './components/cart/cart.component';

const routes: Routes = [
  {
    path: '' ,redirectTo:'bookList',pathMatch: 'full'
  },
  { 
    path: 'bookList', component: BookListComponent
  },
  { 
    path:'addBook', component: AddBookComponent
  },
  { 
    path:'cart', component: CartComponent
  },
  { 
    path: '**', redirectTo: 'bookList'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
