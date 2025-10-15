import { Injectable, signal } from "@angular/core";
import { AmountType } from "./app.model";

@Injectable({
    providedIn: "root"
})

export class AppServices {

    amountObj = {
        initial: 0,
        annual: 0,
        duration: 0,
        return: 0
    }

    outputObj = signal([{ year: 0, invested: 0, interest: 0, totalinterest: 0, capital: 0 }])

    onGetData(amount: AmountType) {
        // console.log(amount)
        this.outputObj.set([]);

        this.amountObj = amount;
        var currentValue = this.amountObj.initial;
        var currentInterestValue = currentValue * (this.amountObj.return / 100);
        var y = 0;
        var totalinterestValue = 0;

        for (let index = 0; index < amount.duration; index++) {

            y = y + 1; //set year
            let cap = this.amountObj.initial + this.amountObj.annual * y //set capital
            currentValue = currentValue + this.amountObj.annual;
            currentInterestValue = currentValue * (this.amountObj.return / 100); //set
            let ivt = currentInterestValue + currentValue;//set
            totalinterestValue = totalinterestValue + currentInterestValue; //set
            currentValue = ivt;

            this.outputObj.update((x) => [
                ...x,
                {
                    year: y, //set
                    invested: parseFloat(ivt.toFixed(2)),
                    interest: parseFloat(currentInterestValue.toFixed(2)), //set
                    totalinterest: parseFloat(totalinterestValue.toFixed(2)), //set
                    capital: parseFloat(cap.toFixed(2)), //set
                }
            ])

        }

    }
}