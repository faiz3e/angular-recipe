import {EventEmitter} from '@angular/core'
import { Product } from "./product.model";
export class ProductService {
    productSelected=new EventEmitter<Product>();
    // constructor(prod_id: number, prod_name: string, prod_desc: string, prod_img:string,prod_price:number) {

    products: Product[] = [
        { prod_id: 1, prod_name: 'nature1', prod_desc: 'abstract by max1', prod_img: "./favicon.ico", prod_price: 111 },
        { prod_id: 2, prod_name: 'nature2', prod_desc: 'abstract by max2', prod_img: "./favicon.ico", prod_price: 222 },
        { prod_id: 3, prod_name: 'nature3', prod_desc: 'abstract by max3', prod_img: "./favicon.ico", prod_price: 333 },
        { prod_id: 4, prod_name: 'nature4', prod_desc: 'abstract by max4', prod_img: "./favicon.ico", prod_price: 444 },
        { prod_id: 5, prod_name: 'nature5', prod_desc: 'abstract by max5', prod_img: "./favicon.ico", prod_price: 555 },
    ]

    getProcudcts() {
        return this.products;
    }
}