import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ion-ui-searchbar',
  templateUrl: './ionic-ui-searchbar.component.html',
  styleUrls: ['./ionic-ui-searchbar.component.css'],
})
export class IonicUiSearchbarComponent implements OnInit {
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
  @Input() searchIcon = null;

  @Input() backgroundColor = '#fff';
  @Input() borderRadius = 'initial';
  @Input() boxShadow = 'initial';
  @Input() cancelButtonColor = 'initial';
  @Input() clearButtonColor = 'initial';
  @Input() searchIconColor = 'initial';
  @Input() placeholderColor = 'initial';
  @Input() placeholderFontStyle = 'initial';
  @Input() placeholderFontWeight = 'initial';
  @Input() placeholderOpacity = 'initial';

  @Output() ionBlur = new EventEmitter<any>();
  @Output() ionChange = new EventEmitter<any>();
  @Output() ionFocus = new EventEmitter<any>();
  @Output() ionInput = new EventEmitter<any>();
  @Output() ionCancel = new EventEmitter<any>();
  @Output() ionClear = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  onIonBlur(event: any): void {
    this.ionBlur.emit(event);
  }

  onIonChange(event: any): void {
    this.ionChange.emit(event);
  }

  onIonFocus(event: any): void {
    this.ionFocus.emit(event);
  }

  onIonInput(event: any): void {
    this.ionInput.emit(event);
  }

  onIonCancel(event: any): void {
    this.ionCancel.emit(event);
  }

  onIonClear(event: any): void {
    this.ionClear.emit(event);
  }
}
