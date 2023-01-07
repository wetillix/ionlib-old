import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IItem } from '../../models/iitem/iitem.model';

@Component({
  selector: 'ion-ui-autocomplete',
  templateUrl: './ionic-ui-autocomplete.component.html',
  styleUrls: ['./ionic-ui-autocomplete.component.css'],
})
export class IonicUiAutocompleteComponent implements OnInit {
  @Input() placeholder: string = 'Your placeholder text';
  @Input() type: string = 'text';
  @Input() disabled: boolean = false;
  @Input() color: string;
  @Input() autocapitalize = 'off';
  @Input() autocomplete: string = 'off';
  @Input() autocorrect: 'on' | 'off' = 'off';
  @Input() debounce = 0;
  @Input() enterkeyhint?:
    | 'enter'
    | 'done'
    | 'go'
    | 'next'
    | 'previous'
    | 'search'
    | 'send';
  @Input() inputmode?:
    | 'none'
    | 'text'
    | 'tel'
    | 'url'
    | 'email'
    | 'numeric'
    | 'decimal'
    | 'search';
  @Input() name: string;
  @Input() pattern?: string;
  @Input() readonly = false;
  @Input() required = false;
  @Input() spellcheck = false;
  @Input() value: string;

  @Input() animated: boolean;
  @Input() cancelButtonIcon: string;
  @Input() cancelButtonText = null;
  @Input() clearIcon: string = 'close-outline';
  @Input() showCancelButton: string;
  @Input() showClearButton: string;
  @Input() searchIcon = 'search-outline';

  @Input() backgroundColor = '#fff';
  @Input() borderRadius = 'initial';
  @Input() boxShadow = 'initial';
  @Input() cancelButtonColor = 'initial';
  @Input() clearButtonColor = 'initial';
  @Input() searchIconColor = 'initial';
  @Input() placeholderColor = '#a8b1bef2';
  @Input() placeholderFontStyle = 'initial';
  @Input() placeholderFontWeight = 'initial';
  @Input() placeholderOpacity = 'initial';

  @Input() items: IItem[] = [];
  @Input() itemsFiltered: IItem[] = [];
  @Input() listMode: 'standard' | 'full' = 'standard';
  @Input() lines: 'full' | 'inset' | 'none' | undefined = 'none';
  @Input() borderLines = '1px solid #FAFAFA';
  @Input() borderRadiusLines = '4px';
  @Input() boxShadowList =
    '0px 0px 8px -1px rgb(26 32 44 / 5%), 0px 0px 1px #a0aec0';
  @Input() inset: boolean = false;
  @Input() insetIconColor: string = 'medium';
  @Input() mode: 'ios' | 'android' = 'ios';

  @Output() ionBlur = new EventEmitter<any>();
  @Output() ionChange = new EventEmitter<any>();
  @Output() ionFocus = new EventEmitter<any>();
  @Output() ionSearchInput = new EventEmitter<any>();
  @Output() ionCancel = new EventEmitter<any>();
  @Output() ionClear = new EventEmitter<any>();

  @Output() onItemClick = new EventEmitter<IItem>();

  isSearching = true;

  constructor() {}

  ngOnInit(): void {}

  onIonInput(event: any): void {
    if (event.target.value.trim().length > 0) {
      this.itemsFiltered = this.items;
      this.itemsFiltered = this.itemsFiltered.filter(
        (item: IItem) =>
          item.title.toLowerCase().indexOf(event.target.value.toLowerCase()) >
          -1
      );
      this.itemsFiltered.length > 0
        ? (this.isSearching = false)
        : (this.isSearching = true);
    } else {
      this.isSearching = true;
      this.itemsFiltered = [];
    }

    this.ionSearchInput.emit(this.itemsFiltered);
  }

  onIonCancel(event: any): void {
    this.ionCancel.emit(event);
  }

  onIonClear(event: any): void {
    this.ionClear.emit(event);
  }

  onGetItemInfo(item: IItem): void {
    this.onItemClick.emit(item);
  }
}
