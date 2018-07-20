import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from './app.component'
import { ProductComponent } from "./product/product.component";
import { CartComponent } from "./cart/cart.component";
import { CartListComponent } from './cart/cart-list/cart-list.component'
import { CartDetailComponent } from "./cart/cart-list/cart-detail/cart-detail.component";
import { ProductListComponent } from "./product/product-list/product-list.component";
import { ProductDetailComponent } from "./product/product-detail/product-detail.component";
import { HomeComponent } from './home/home.component'
const appRoutes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    {
        path: 'cart', component: CartComponent,
        children: [{
            path: 'cart-list', component: CartListComponent,
            children: [{ path: "cart-detail", component: CartDetailComponent }]
        }]
    },
    {
        path: 'product', component: ProductComponent,
        children: [{
            path: 'product-list', component: ProductListComponent,
            children: [{ path: 'product-detail', component: ProductDetailComponent }]
        }]
    },
    { path: '**', redirectTo: '' },

]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {

} 