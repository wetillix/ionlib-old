import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicUiListComponent } from './ionic-ui-list.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [IonicUiListComponent],
  imports: [CommonModule, IonicModule],
  exports: [IonicUiListComponent],
})
export class IonicUiListModule {}
