import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Step } from '../models/step.model';
import { StepsService } from '../services/steps.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  myObserver = { next: (id: number) => this.loadBackgroundImage(id) };

  constructor(private stepsservice: StepsService, private router: Router) { }

  ngOnInit(): void {
    this.router.navigate(['/story']);
    this.stepsservice.subject.subscribe(this.myObserver);
  }

  loadBackgroundImage(id: number) {
    let main = document.getElementsByClassName('main')[0] as HTMLElement;
    let step = this.stepsservice.getStepById(id) as Step;
    main.style.backgroundImage = `url(${step.theme.background})`;
  }
}
