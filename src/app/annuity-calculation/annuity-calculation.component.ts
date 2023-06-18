import { Component } from '@angular/core';
import { AnnuityParameters } from '../AnnuityParameters';

@Component({
  selector: 'app-annuity-calculation',
  templateUrl: './annuity-calculation.component.html',
  styleUrls: ['./annuity-calculation.component.css']
})
export class AnnuityCalculationComponent {
  annuityParameters = new AnnuityParameters(0,0,0)

  annuityCalculated = false
  annuity = 0

  onSubmit() {
    this.annuity = AnnuityCalculationComponent.computeAnnuity(this.annuityParameters)
    this.annuityCalculated = true
  }

  static computeAnnuity(annuityParameters: AnnuityParameters){
    let monthlyInterest = annuityParameters.annualInterestRate / 12 / 100
    let annuity = monthlyInterest / (1 - (1 + monthlyInterest)**(-annuityParameters.remainingMonths))
    * annuityParameters.remainingPrincipal

    return AnnuityCalculationComponent.roundToDecimals(annuity, 2)
  }

  static roundToDecimals(number:number, decimals:number){
    return Math.round(number * 10**decimals)/10**decimals
  }

}
