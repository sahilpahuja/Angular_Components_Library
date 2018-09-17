import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() disabled = false;
  @Input() className: string;
  @Input() classType: string;

  @Output() buttonClickHandler = new EventEmitter<{ event: Event }>();

  /**
* clickHandler - function sends click action of button to parent which invoked it.
* @param event
* @return none
*/
  private clickHandler(event: Event): void {
    this.buttonClickHandler.emit({ event: event });
  }
}
