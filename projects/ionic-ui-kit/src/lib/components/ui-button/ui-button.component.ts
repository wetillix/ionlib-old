import { EventEmitter, Input, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ui-button',
  templateUrl: './ui-button.component.html',
  styleUrls: ['./ui-button.component.css'],
})
export class UiButtonComponent implements OnInit {
  @Input() expand: string;
  @Input() fill: string;
  @Input() shape: string;
  @Input() spinnerName: string;
  @Input() isShowingSpinner: boolean = true;
  @Output() click = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {}

  onClick(event: any) {
    this.click.emit(event);
  }
}
