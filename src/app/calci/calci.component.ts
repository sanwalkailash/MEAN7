import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calci',
  templateUrl: './calci.component.html',
  styleUrls: ['./calci.component.css']
})
export class CalciComponent implements OnInit {

  public calciJSON={
    "resultDisplay":"",
    "saveHistory":[]
  }

  constructor() { }

  ngOnInit() {
  }


  operation(action:any){
    console.info("@operation..",this.calciJSON.resultDisplay)
    switch(action){
      case "=":
        alert(this.calciJSON.resultDisplay)
        break;
      default :
        if(['+','-','x','/'].includes(action) && this.calciJSON.resultDisplay.substr(-1)==action){
          console.info("action already present, ignore");
          return;
        }
        this.calciJSON.resultDisplay = " "+this.calciJSON.resultDisplay+action
    }
  }

  clear(){
    this.calciJSON.resultDisplay="";
  }

  save(){
    this.calciJSON.saveHistory.push(this.calciJSON.resultDisplay);
    localStorage.setItem("history",this.calciJSON.resultDisplay);
    this.clear();
  }

  

}
