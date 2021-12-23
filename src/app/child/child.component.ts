import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Input() warningGroups: any[];

  @Output() action = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  performAction(): void {
    this.action.emit();
  }
}
