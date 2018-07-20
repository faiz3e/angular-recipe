
export class Product {
  public prod_id: number;
  public prod_name: string;
  public prod_desc: string;
  public prod_img:string;
  public prod_price: number;
//   { id: 1, prod_name: 'nature1', prod_desc: 'abstract by max1', img: "./favicon.ico",price:123 },
  constructor(prod_id: number, prod_name: string, prod_desc: string, prod_img:string,prod_price:number) {
    this.prod_id = prod_id;
    this.prod_name = prod_name;
    this.prod_desc = prod_desc;
    this.prod_img = prod_img;
    this.prod_price=prod_price
  }
}
