import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  num1:number;
  num2:number;
  result:number;

  add():number{
    console.log(typeof this.num1)
    this.result=Number(this.num1)+Number(this.num2);
    console.log(this.result)
    return this.result
  }

  substract():number{
    console.log(typeof this.num1)

    this.result=Number(this.num1)-Number(this.num2);
    console.log(this.result)
    return this.result;
  }

  multiplication():number{
    this.result=Number(this.num1)*Number(this.num2);
    console.log(this.result)
    return this.result;
 

  }

  division():number{
    this.result=Number(this.num1)/Number(this.num2);
    console.log(this.result)
    return this.result;
 
  }

}
