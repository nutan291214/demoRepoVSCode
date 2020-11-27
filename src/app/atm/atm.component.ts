import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-atm',
  templateUrl: './atm.component.html',
  styleUrls: ['./atm.component.css']
})
export class AtmComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  amount:number;
  balance:number=50000;
   msg:String="";
  withdrawal():void{
    if(this.amount>this.balance){
         this.msg="Insufficient amount  "+this.balance;

          }
     else{
    this.balance=this.balance-this.amount;
    this.msg="Remaining balance="+this.balance;

     }
  }

  deposit():void{
    console.log(typeof this.amount)
    console.log(typeof(this.balance))
    this.balance=this.balance+Number(this.amount)
    console.log(this.balance)
    this.msg=" account balance "+this.balance;
  }

  

}
