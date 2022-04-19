import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicUiButtonComponent } from './ionic-ui-button.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [IonicUiButtonComponent],
  imports: [CommonModule, IonicModule],
  exports: [IonicUiButtonComponent],
})
export class IonicUiButtonModule {}
