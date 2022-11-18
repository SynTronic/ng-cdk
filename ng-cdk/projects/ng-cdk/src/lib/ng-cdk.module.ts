import { NgModule } from '@angular/core';
import { AutofocusDirective } from './directives/autofocus.directive';
import { NgCdkComponent } from './ng-cdk.component';



@NgModule({
  declarations: [
    NgCdkComponent
  ],
  imports: [
    AutofocusDirective
  ],
  exports: [
    NgCdkComponent,
    AutofocusDirective
  ]
})
export class NgCdkModule { }
