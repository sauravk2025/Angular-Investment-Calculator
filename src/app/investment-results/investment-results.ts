import { Component, computed, inject, Input, Signal } from '@angular/core';
// import { JsonPipe } from '@angular/common';
import { type ResultType } from '../app.model';
import { CurrencyPipe } from '@angular/common';
import { AppServices } from '../app.services';

@Component({
  selector: 'app-investment-results',
  // imports: [CurrencyPipe],
  templateUrl: './investment-results.html',
  styleUrl: './investment-results.css',
  standalone:false
})
export class InvestmentResults {
  public appServices = inject(AppServices);

  get obj()
  {
    return this.appServices.outputObj; 
  }
  // or instead of getter
  //obj =  computed(() => this.appServices.outputObj()) 
  //or another option
  // obj = this.appServices.output().asReadOnly()
}
