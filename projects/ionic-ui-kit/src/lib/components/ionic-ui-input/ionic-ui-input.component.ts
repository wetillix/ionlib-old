import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ion-ui-input',
  templateUrl: './ionic-ui-input.component.html',
  styleUrls: ['./ionic-ui-input.component.css'],
})
export class IonicUiInputComponent implements OnInit {
  @Input() placeholder: string = 'Your placeholder text';
  @Input() type: string = 'text';
  @Input() disabled: boolean = false;
  @Input() color: string;
  @Input() background: string = '#F2F2F2';
  @Input() accept?: string;
  @Input() autocapitalize = 'off';
  @Input() autocomplete: string = 'off';
  @Input() autocorrect: 'on' | 'off' = 'off';
  @Input() autofocus = false;
  @Input() clearInput = false;
  @Input() clearOnEdit?: boolean;
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
  @Input() max?: string | number;
  @Input() maxlength?: number;
  @Input() min?: string | number;
  @Input() minlength?: number;
  @Input() multiple?: boolean;
  @Input() name: string;
  @Input() pattern?: string;
  @Input() readonly = false;
  @Input() required = false;
  @Input() spellcheck = false;
  @Input() step?: string;
  @Input() size?: number;
  @Input() value?: string;

  @Input() error: boolean = false;
  @Input() success: boolean = false;

  @Input() iconName: string;
  @Input() iconColor: string = 'dark';

  constructor() {}

  ngOnInit(): void {}
}
