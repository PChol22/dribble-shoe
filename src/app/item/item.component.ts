import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  @Input() public color = '#FF0073';
  @Input() public imgUrl = '';
  @Input() public selected = false;
  @Input() public last = false;

  constructor() { }

  ngOnInit(): void {
  }
}
