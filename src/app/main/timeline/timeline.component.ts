import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Step } from 'src/app/models/step.model';
import { StepsService } from 'src/app/services/steps.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  id!: number;
  step!: Step;

  start_time!: number;
  total_duration!: number;

  timeline!: HTMLElement;
  timeline_icon!: HTMLImageElement;

  private sub!: Subscription;

  myObserver = {
    next: ((id: number) => {
      this.id = id;
      this.step = this.stepsservice.getStepById(id) as Step;
      this.changeIconPosition();
      this.loadIcon(id !== 1);
    })
  };

  constructor(private stepsservice: StepsService) { }

  ngOnInit(): void {
    this.setInitialTimes();
    this.timeline = document.getElementsByClassName('timeline')[0] as HTMLElement;
    this.timeline_icon = document.getElementsByClassName('timeline_icon')[0] as HTMLImageElement;
    this.sub = this.stepsservice.subject.subscribe(this.myObserver);
    window.addEventListener('resize', () => {
      this.timeline_icon.classList.add('timeline_icon_window_resize');
      this.changeIconPosition();
      setTimeout(() => this.timeline_icon.classList.remove('timeline_icon_window_resize'), 100);
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  parseTime(str: string): number {
    let tab = str.split(':');
    return parseInt(tab[0]) + parseInt(tab[1]) / 60;
  }

  setInitialTimes(): void {
    let steps = this.stepsservice.steps;
    let debut = steps[0].hour;
    let fin = steps[steps.length - 1].hour;
    this.start_time = this.parseTime(`${debut.getHours()}:${debut.getMinutes()}`);
    this.total_duration = this.parseTime(`${fin.getHours()}:${fin.getMinutes()}`) - this.start_time;
  }

  loadIcon(is_fading: boolean): void {
    let icon = this.step.theme.icon;
    this.timeline_icon.setAttribute('alt', icon.alt);
    this.timeline_icon.setAttribute('author', icon.author);
    if (is_fading) {
      this.timeline_icon.classList.add('timeline_icon_fade');
      setTimeout(() => this.timeline_icon.setAttribute('src', icon.src), 1000);
      setTimeout(() => this.timeline_icon.classList.remove('timeline_icon_fade'), 2000);
    }
    else this.timeline_icon.setAttribute('src', icon.src);
  }

  changeIconPosition(): void {
    let time = this.parseTime(`${this.step.hour.getHours()}:${this.step.hour.getMinutes()}`) - this.start_time;
    let icon_position = (this.timeline.offsetWidth - this.timeline_icon.offsetWidth - parseInt(getComputedStyle(this.timeline).padding.split('px')[0]) * 2) * (time / this.total_duration);
    this.timeline_icon.setAttribute('style', `transform: translate(${icon_position}px)`);
  }
}