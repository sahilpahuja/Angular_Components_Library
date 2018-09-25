import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-widget',
  templateUrl: './button-widget.component.html',
  styleUrls: ['./button-widget.component.scss']
})
export class ButtonWidgetComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  buttonClickHandler() {
    alert('Button clicked');
  }
}
