import { Component, OnInit,Input ,Output,EventEmitter} from '@angular/core';
import {Recipe} from '../../recipe.model'
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
@Input() recipe:Recipe;
@Output() ClickedItem=new EventEmitter<string>();;
onRecipeClicked(e){
  // console.log("clicked",e);
  // this.ClickedItem=e;
  this.ClickedItem.emit(e)

}
  constructor() { }

  ngOnInit() {
  }

}
