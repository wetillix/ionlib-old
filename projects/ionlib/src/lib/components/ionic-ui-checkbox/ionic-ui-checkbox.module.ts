import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicUiCheckboxComponent } from './ionic-ui-checkbox.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [IonicUiCheckboxComponent],
  imports: [CommonModule, IonicModule],
  exports: [IonicUiCheckboxComponent],
})
export class IonicUiCheckboxModule {}
