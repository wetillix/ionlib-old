import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicUiInputComponent } from './ionic-ui-input.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [IonicUiInputComponent],
  imports: [CommonModule, IonicModule],
  exports: [IonicUiInputComponent],
})
export class IonicUiInputModule {}
