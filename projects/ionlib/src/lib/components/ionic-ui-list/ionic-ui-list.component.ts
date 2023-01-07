import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IItem } from '../../models/iitem/iitem.model';

@Component({
  selector: 'ion-ui-list',
  templateUrl: './ionic-ui-list.component.html',
  styleUrls: ['./ionic-ui-list.component.css'],
})
export class IonicUiListComponent implements OnInit {
  @Input() items: IItem[] = [];
  @Input() itemsFiltered?: IItem[] = [];
  @Input() listMode: 'standard' | 'full' = 'standard';
  @Input() lines: 'full' | 'inset' | 'none' | undefined;
  @Input() borderLines: string;
  @Input() borderRadiusLines: string;
  @Input() inset: boolean = false;
  @Input() insetIconColor: string = 'medium';
  @Input() mode: 'ios' | 'android' = 'ios';
  @Input() boxShadowList =
    '0px 0px 8px -1px rgb(26 32 44 / 5%), 0px 0px 1px #a0aec0';

  @Output() onItemClick = new EventEmitter<IItem>();

  constructor() {}

  ngOnInit(): void {}

  onGetItemInfo(item: IItem): void {
    this.onItemClick.emit(item);
  }
}
