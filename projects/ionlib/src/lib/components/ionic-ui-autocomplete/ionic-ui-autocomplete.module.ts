import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { IonicUiAutocompleteComponent } from './ionic-ui-autocomplete.component';
import { IonicUiListModule } from '../ionic-ui-list/ionic-ui-list.module';
import { IonicUiSearchbarModule } from '../ionic-ui-searchbar/ionic-ui-searchbar.module';

@NgModule({
  declarations: [IonicUiAutocompleteComponent],
  imports: [
    CommonModule,
    IonicModule,
    IonicUiListModule,
    IonicUiSearchbarModule,
  ],
  exports: [IonicUiAutocompleteComponent],
})
export class IonicUiAutocompleteModule {}
