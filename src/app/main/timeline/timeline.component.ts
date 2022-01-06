import { Component, OnInit } from '@angular/core';
import { StepsService } from 'src/app/services/steps.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  myObserver = {
    next: (x: number) => console.log('Observer got a next value: ' + x),
    error: (err: Error) => console.error('Observer got an error: ' + err),
    complete: () => console.log('Observer got a complete notification'),
  };

  constructor(private stepsservice: StepsService) { }

  ngOnInit(): void {
    this.stepsservice.subject.subscribe(this.myObserver)
  }
}
