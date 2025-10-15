import { NgModule } from "@angular/core";
import { Userinput } from "./userinput";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations : [Userinput],
    imports : [FormsModule],
    exports:[Userinput]
})
export class UserInputModule{

}