import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-the-if-component',
  templateUrl: './the-if-component.component.html',
  styleUrls: ['./the-if-component.component.css']
})
export class TheIfComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  appTitle:String="welcome to";
  status:boolean=true

  flag:boolean=false;

   arr:number[]=[1,2,1,2,4,3,5,6,7];
   arrString:String[]=['angular','react','vue','html']

}

