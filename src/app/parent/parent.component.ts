import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  childSays: string;
  parentSays = '';
  transmitToChild: string;

  constructor() { }

  ngOnInit(): void {
  }

  btnSendToChild() {
    this.sendToChild(this.parentSays);
  }

  sendToChild(message: string) {
    this.transmitToChild = message;
  }

  getMessage(message: string) {
    this.childSays = message;
  }

  clearInput() {
    this.parentSays = '';
  }

}
