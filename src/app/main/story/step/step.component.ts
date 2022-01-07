import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Step } from 'src/app/models/step.model';
import { StepsService } from 'src/app/services/steps.service';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss']
})
export class StepComponent implements OnInit {

  step!: Step;

  constructor(private StepsService: StepsService, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    let id = +this.activeRoute.snapshot.params['id'];
    this.step = this.StepsService.getStepById(id) as Step;
    this.Observe();
  }

  public Observe() {
    this.StepsService.subject.next(this.step.id);
  }

}