import { Component, OnInit,Input } from '@angular/core';
import {ProductService} from '../../product.service'
import {Product} from '../../product.model';
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
// @Input()selectedproduct:Product
productSelected:Product;
  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.productService.productSelected
      .subscribe(
        (product: Product) => {
          this.productSelected = product;
        }
      );
      console.log("productSelected",this.productSelected);
      
      
  }

}
