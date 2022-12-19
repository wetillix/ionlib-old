import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'ion-ui-checkbox',
  templateUrl: './ionic-ui-checkbox.component.html',
  styleUrls: ['./ionic-ui-checkbox.component.css'],
})
export class IonicUiCheckboxComponent implements OnInit {
  @Input() checkboxColor: string;
  @Input() labelColor: string;
  @Input() disabled: boolean = false;
  @Input() value: boolean = false;
  @Input() position: 'start' | 'end' = 'start';
  @Input() label: string;
  @Input() labelSize: string;
  @Input() height: string;
  @Input() width: string;
  @Input() borderRadius: string;
  @Input() border: string;

  @Output() change = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  onCheckboxValueChange(event) {
    this.change.emit(event.detail.checked);
  }
}
