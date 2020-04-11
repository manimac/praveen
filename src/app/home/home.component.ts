import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  name: string;
  showDiv = false;
  showClass = false;
  styleProp = {
    background: 'greenyellow'
  }
  constructor() { }

  ngOnInit(): void {
    this.name = '<b>Mani</b>';
  }

  ngAfterViewInit(){
    
  }

  save(val){
    this.showDiv = !this.showDiv;
  }

}
