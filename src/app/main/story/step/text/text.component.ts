import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnInit {

  @Input() text!: string;

  sub!: Subscription;

  container!: Element;
  index!: number;
  timer!: ReturnType<typeof setInterval>;

  constructor(private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.container = document.getElementsByClassName('text')[0].firstElementChild as Element;
    this.sub = this.activeRoute.params.subscribe(() => {
      this.writeText();
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  writeText(): void {
    this.container.innerHTML = '';
    this.index = 0;
    clearInterval(this.timer);
    this.timer = setInterval(() => {
      if (this.index < this.text.length) {
        this.container.innerHTML += this.text[this.index++];
      }
    }, 42);
  }

  onWriteAll(): void {
    clearInterval(this.timer);
    while (this.index < this.text.length) {
      this.container.innerHTML += this.text[this.index++];
    }
  }
}