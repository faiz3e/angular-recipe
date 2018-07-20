import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allow=true;
  name='';
  servers=[{id:1,name:'server'},{id:2,name:'server-abc'}];
  serverCreated=false;
  constructor() { }

  ngOnInit() {
  }

  onUpdateName(event:any){
   
    // console.log(event.target.value);
    this.name=event.target.value;

}

addServer(){
  this.servers.push({id:Math.floor(9.0*Math.random()+1),name:this.name})
  
  console.log("server added",this.servers);
}

getColor(){
  
  return this.serverCreated === true ?  'green' : 'red';

}

  onClicked(){
    this.serverCreated=true;
    this.allow=false;
  }
}
