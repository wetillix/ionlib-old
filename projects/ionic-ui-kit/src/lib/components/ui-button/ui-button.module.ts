import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiButtonComponent } from './ui-button.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [UiButtonComponent],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class UiButtonModule { }
