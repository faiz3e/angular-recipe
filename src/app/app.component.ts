import { Component } from '@angular/core';
import { ProductService } from "./product.service";
import { Product } from "./product.model";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ProductService]
})
export class AppComponent {
  itemSelected:Product
constructor(private productService:ProductService){}


ngOnInit(){

}
}