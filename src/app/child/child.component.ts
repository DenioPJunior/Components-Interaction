import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  childSays = '';

  // Receive from parent
  @Input() receivedParentMessage: string;

  // Send to parent
  @Output() messageToEmit = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  sendToParent() {
    return this.messageToEmit.emit(this.childSays);
  }

  clearInput() {
    this.childSays = '';
  }

}
