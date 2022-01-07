import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Step } from 'src/app/models/step.model';
import { StepsService } from 'src/app/services/steps.service';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.scss']
})
export class ChoiceComponent implements OnInit {
  @Input() text!: string;

  step!: Step;
  
  constructor(private StepsService: StepsService,private router: Router) { }

  ngOnInit(): void {
    this.step = this.StepsService.getStepById(1) as Step;
  }

  public test() {
    this.step.id = this.step.id + 1;
    this.StepsService.subject.next(this.step.id);
    this.router.navigate(['/story/steps/'+ this.step.id]);
    console.log("step" + this.step.id)
  }
}