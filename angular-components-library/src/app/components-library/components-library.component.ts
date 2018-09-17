import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-components-library',
  templateUrl: './components-library.component.html',
  styleUrls: ['./components-library.component.scss']
})
export class ComponentsLibraryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  buttonClickHandler() {
    alert('Button clicked');
  }
}
