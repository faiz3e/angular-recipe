import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../product.model'
import {ProductService} from '../../../product.service';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;


  constructor(private productService:ProductService) { }

  ngOnInit() {
    // console.log(this.product);

  }
  productItemClicked() {
    console.log("clicked item ", this.product);
    this.productService.productSelected.emit(this.product);
    // this.recipeService.recipeSelected.emit(this.recipe);
  }
}
