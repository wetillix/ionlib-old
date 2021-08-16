import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ion-ui-button',
  templateUrl: './ionic-ui-button.component.html',
  styleUrls: ['./ionic-ui-button.component.css'],
})
export class IonicUiButtonComponent implements OnInit {
  @Input() borderRadius: string;
  @Input() width: string = '90%';
  @Input() height: string;
  @Input() color: string;
  @Input() disabled: boolean = false;
  @Input() mode: string = 'ios';
  @Input() buttonText: string = 'Button';

  @Input() spinnerName: string = 'bubbles';
  @Input() spinnerColor: string;
  @Input() displaySpinner: string = 'none';
  @Input() spinnerPosition: string = 'right';

  @Input() iconName: string = '';
  @Input() iconColor: string;
  @Input() displayIcon: string = 'none';
  @Input() iconPosition: string = 'right';

  constructor() {}

  ngOnInit(): void {}
}
