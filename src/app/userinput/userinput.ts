import { Component, EventEmitter, inject, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type AmountType } from '../app.model';
import { AppServices } from '../app.services';
@Component({
  selector: 'app-userinput',
  // imports: [FormsModule],
  standalone:false,
  templateUrl: './userinput.html',
  styleUrl: './userinput.css'
})
export class Userinput {

  // @Output() calc = new EventEmitter<AmountType>()

  initialamount = signal(null);
  annualamount = signal(null);
  duration = signal(null);
  returnamount = signal(null);

  appService = inject(AppServices)


    //event.preventDefault()
  onCalc()
  {
    this.appService.onGetData({
      initial: this.initialamount() || 0 ,
      annual: this.annualamount() || 0,
      duration: this.duration() || 0,
      return: this.returnamount() || 0
    })

  }



}
