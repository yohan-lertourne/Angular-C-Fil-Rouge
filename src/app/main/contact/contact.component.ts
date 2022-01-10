import { Component} from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  dialog = <HTMLElement> document.getElementById('dialog');
  constructor() { }
  
  onClose() {
    document.getElementById('dialog')?.classList.add('hide');
  }
  
  ClickedOut(event:any) {
    if(event.target.className === "c-dialog") {
      this.onClose();
    } 
 }
}
