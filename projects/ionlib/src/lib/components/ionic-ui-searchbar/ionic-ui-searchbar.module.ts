import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicUiSearchbarComponent } from './ionic-ui-searchbar.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [IonicUiSearchbarComponent],
  imports: [CommonModule, IonicModule],
  exports: [IonicUiSearchbarComponent],
})
export class IonicUiSearchbarModule {}
