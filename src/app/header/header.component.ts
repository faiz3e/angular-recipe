import { Component ,EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
@Output() selectedTab=new EventEmitter<string>();

onSelect(e:string){
console.log("clicked",e);
// this.open=e;
this.selectedTab.emit(e)

  }



//   'recipe')">Recipes</a></li>
//   <li><a href="#" (click)="('shoping-list')" >Shopping List</a></li>
// </ul>
}
