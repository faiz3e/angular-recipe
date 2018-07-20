import { Component, OnInit ,Input} from '@angular/core';

import { ProductService } from '../../product.service'
import { Product } from "../../product.model";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  // @Input()productselected:Product;
  products:Product[];
  productselected:Product;
  constructor(private productService: ProductService) { }

  ngOnInit() {

    this.products = this.productService.getProcudcts();
   
    // this.productService.productselected.subscribe(
    //   (product:Product)=>{
    //     this.productselected=product
    //   }
    // )
    console.log(this.products);
    
  
  }

}
