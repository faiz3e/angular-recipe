import { Component, OnInit ,Input,} from '@angular/core';
// import {ClickedItem} from './recipe-item/recipe-item.component';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe1', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg'),
    new Recipe('A Test Recipe2', 'This is simply a test', 'https://upload.wikimedia.org/wikipedia/commons/1/15/Recipe_logo.jpeg')
  ];
  
@Input()recipe:Recipe;
// @Input()clk:ClickedItem;

onClickitem(ClickedItem){
  console.log("asdasd",ClickedItem);
  
}
  constructor() {
// console.log('clickeditem',this.clk);
    
   }


  ngOnInit() {
  }





}
