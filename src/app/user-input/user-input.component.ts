import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { InvestmentInput } from '../investment-input.model';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})

export class UserInputComponent {

  @Output() calculate = new EventEmitter<InvestmentInput>();

  enterInitialInvestment = "0";
  enterAnualInvestment = "0";
  enterExpectedReturn = "0";
  duration = "2";

  onSubmit() {
    this.calculate.emit({
      initialInvestment: Number(this.enterInitialInvestment),
      annualInvestment: Number(this.enterAnualInvestment),
      expectedReturn: Number(this.enterExpectedReturn),
      duration: Number(this.duration),
    });
  }
}

