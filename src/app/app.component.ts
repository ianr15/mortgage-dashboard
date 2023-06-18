import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mortgage-dashboard';

  monthlyInterest = 0
  numberOfMonths = 0
  annuity = 0

  computeAnnuity(principal:string, interestPercentage:string, years:string, months:string){
    this.monthlyInterest = Number(interestPercentage) / 12 / 100
    this.numberOfMonths = Number(years)*12 + Number(months)
    this.annuity = this.roundToDecimals(this.monthlyInterest/(1-(1+this.monthlyInterest)**(-this.numberOfMonths))*Number(principal), 2)
  }

  roundToDecimals(number:number, decimals:number){
    return Math.round(number * 10**decimals)/10**decimals
  }
}
