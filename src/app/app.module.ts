import { NgModule } from "@angular/core";
import { App } from "./app";
// import { Userinput } from "./userinput/userinput";
import { InvestmentResults } from "./investment-results/investment-results";
import { Header } from "./header/header";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { UserInputModule } from "./userinput/userinput.module";
import { JsonPipe } from "@angular/common";

@NgModule({

    declarations : [App,Header,InvestmentResults],
    bootstrap :[App],
    imports:[BrowserModule,UserInputModule,FormsModule,JsonPipe]
})

export class AppModule{

}