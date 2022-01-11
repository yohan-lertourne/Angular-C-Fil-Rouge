import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { Choice } from 'src/app/models/choice.model';
import { Step } from 'src/app/models/step.model';
import { StepsService } from 'src/app/services/steps.service';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss']
})
export class StepComponent implements OnInit {

  step!: Step;
  text!: string;
  choices!: Choice[];

  private sub!: Subscription;

  constructor(private StepsService: StepsService, private activeRoute: ActivatedRoute,) { }

  ngOnInit(): void {
    this.StepsService.subject.next(1);
    this.sub = this.activeRoute.params.subscribe((params) => {
      this.loadStep(params);
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  loadStep(params: Params): void {
    this.step = this.StepsService.getStepById(+params['id']) as Step;
    this.choices = params['death'] ? [] : this.step.choices;
    if (params['additional']) {
      this.text = this.step.additional + this.step.story;
    } else if (params['safe']) {
      this.text = this.step.safe + this.step.story;
    } else if (params['death']) {
      this.text = this.step.death;
    } else {
      this.text = this.step.story;
    }
  }
}