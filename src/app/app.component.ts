import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';

  calValue: number = 0;
  funcT: any = 'NoFunction';
  calNumber: string = 'noValue';
  firstNumber: number = 0;
  secondNumber: number = 0;


  onclickvalue(val: string, type: any) {
    // console.log(val,type);
    if (type === 'number') {
      this.onNumberclick(val);
    }
    else if (type === 'function') {
      this.onFunctionClick(val);
    }
  }
  onNumberclick(val: string) {
    if (this.calNumber != 'noValue') {
      this.calNumber = this.calValue + val;
    }
    else {
      this.calNumber = val;
    }
    this.calValue = parseFloat(this.calNumber);
  }

  //funtion
  onFunctionClick(val: string) {
    //clear all 
    if(this.funcT =='c'){
      this.clearAll();
    }
      if(this.funcT == 'NoFunction') {
      this.firstNumber = this.calValue;
      this.calValue = 0;
      this.calNumber = 'noValue';
      this.funcT = val;
    }
    else if(this.funcT!= 'NoFunction'){
      this.secondNumber= this.calValue;
      this.valueCalculate(val);
    }
  }
  valueCalculate(val:string){
    if(this.funcT == '+'){
      const total = this.firstNumber + this.secondNumber;
     this.totalAssignValues(total,val);
    }
    if(this.funcT == '-'){
      const total = this.firstNumber - this.secondNumber;
      this.totalAssignValues(total,val);
    }
    if(this.funcT == '*'){
      const total = this.firstNumber * this.secondNumber;
      this.totalAssignValues(total,val);
    }
    if(this.funcT == '/'){
      const total = this.firstNumber / this.secondNumber;
      this.totalAssignValues(total,val);
    }
    if(this.funcT == '%'){
      const total = this.firstNumber % this.secondNumber;
      this.totalAssignValues(total,val);
    }
  }
  totalAssignValues(total:number,val:string){
    this.calValue=total;
      this.firstNumber=total;
      this.secondNumber=0;
      this.calNumber='noValue';
      this.funcT = val;
      if(val =='='){this.onEqualPress()};
  }
  onEqualPress(){
    this.firstNumber=0;
    this.secondNumber=0;
    this.funcT='NoFunction';
    this.calNumber='noValue';
  }
  clearAll(){
    this.firstNumber =0;
    this.secondNumber= 0;
    this.calValue = 0;
    this.funcT= 'NoFunction';
    this.calNumber = 'noValue'
  }
}
