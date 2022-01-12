import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Step } from 'src/app/models/step.model';
import { StepsService } from 'src/app/services/steps.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  id!: number;
  step!: Observable<Object>;

  start_time!: number;
  total_duration!: number;

  timeline!: HTMLElement;
  timeline_icon!: HTMLImageElement;

  private sub!: Subscription;

  myObserver = {
    next: ((id: number) => {
      this.id = id;
      this.step = this.stepsservice.getAPIStep(id);
      /* this.step = this.stepsservice.getStepById(id) as Step; */
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
    let steps = this.stepsservice.getAPISteps();
    steps.subscribe((data: any) => {
      let debut = new Date(data[0].hour);
      let fin = new Date(data[data.length - 1].hour);
      this.start_time = this.parseTime(`${debut.getHours()}:${debut.getMinutes()}`);
      this.total_duration = this.parseTime(`${fin.getHours()}:${fin.getMinutes()}`) - this.start_time;
    });
  }

  loadIcon(is_fading: boolean): void {
    this.step.subscribe((data: any) => {
      let theme = this.stepsservice.getAPITheme(data.themes);
      theme.subscribe((data: any) => {
        let icon = this.stepsservice.getAPIIcon(data.icons);
        icon.subscribe((data: any) => {
          this.timeline_icon.alt = data.alt;
          this.timeline_icon.setAttribute('author', data.author);
          if (is_fading) {
            this.timeline_icon.classList.add('timeline_icon_fade');
            setTimeout(() => this.timeline_icon.src = data.src, 1000);
            setTimeout(() => this.timeline_icon.classList.remove('timeline_icon_fade'), 2000);
          }
          else this.timeline_icon.src = data.src;
        });
      });
    });
  }

  changeIconPosition(): void {
    this.step.subscribe((data: any) => {
      let hour = new Date(data.hour);
      let time = this.parseTime(`${hour.getHours()}:${hour.getMinutes()}`) - this.start_time;
      let icon_position = (this.timeline.offsetWidth - this.timeline_icon.offsetWidth - parseInt(getComputedStyle(this.timeline).padding.split('px')[0]) * 2) * (time / this.total_duration);
      this.timeline_icon.style.transform = `translate(${icon_position}px)`;
    });
  }
}