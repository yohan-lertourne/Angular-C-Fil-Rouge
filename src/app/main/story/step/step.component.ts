import { Component, OnInit } from '@angular/core';
import { Step } from 'src/app/models/step.model';
import { StepsService } from 'src/app/services/steps.service';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss']
})
export class StepComponent implements OnInit {

  step!: Step;

   constructor(private StepsService: StepsService) { }

  ngOnInit(): void {
    this.step = this.StepsService.getStepById(1) as Step;
    this.Observe();
  }

  public Observe() {
    this.StepsService.subject.next(this.step.id);
  }

}