import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  dialog!: HTMLElement;

  constructor() { }

  ngOnInit(): void {
    this.dialog = document.getElementById('dialog') as HTMLElement;
  }

  onClose() {
    this.dialog.classList.add('hide');
  }

  ClickedOut(event: any) {
    if (event.target.className === "c-dialog") {
      this.onClose();
    }
  }
}