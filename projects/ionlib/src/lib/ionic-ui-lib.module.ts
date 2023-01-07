import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { IonicUiButtonModule } from './components/ionic-ui-button/ionic-ui-button.module';
import { IonicUiCheckboxModule } from './components/ionic-ui-checkbox/ionic-ui-checkbox.module';
import { IonicUiInputModule } from './components/ionic-ui-input/ionic-ui-input.module';
import { IonicUiListModule } from './components/ionic-ui-list/ionic-ui-list.module';
import { IonicUiSearchbarModule } from './components/ionic-ui-searchbar/ionic-ui-searchbar.module';
import { IonicUiAutocompleteModule } from './components/ionic-ui-autocomplete/ionic-ui-autocomplete.module';

@NgModule({
  declarations: [],
  imports: [IonicModule.forRoot()],
  exports: [
    IonicUiButtonModule,
    IonicUiListModule,
    IonicUiCheckboxModule,
    IonicUiInputModule,
    IonicUiSearchbarModule,
    IonicUiAutocompleteModule,
  ],
})
export class IonicUiKitModule {}
