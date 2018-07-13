import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loaded="recipe";
  
  onNavigate(selectedTab:string){
    this.loaded=selectedTab;
    console.log("e",selectedTab);
    
  }
}
