import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Choice } from 'src/app/models/choice.model';
import { StepsService } from 'src/app/services/steps.service';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.scss']
})
export class StepComponent implements OnInit {

  step!: Observable<Object>;
  text!: string;
  choices!: Choice[];

  private sub!: Subscription;

  constructor(private StepsService: StepsService, private activeRoute: ActivatedRoute) { }

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
    this.choices = [];
    let step_sub = this.StepsService.getAPIStep(+params['id']).subscribe((data: any) => {
      if (params['death']) {
        this.text = data.death;
      } else {
        let choices_tab: string[] = data.choices.split(',');
        choices_tab.forEach((element) => {
          let choice_sub = this.StepsService.getAPIChoice(+element).subscribe((data: any) => {
            let choice = new Choice();
            choice.id = data.choiceId;
            choice.text = data.text;
            this.choices.push(choice);
          });
          choice_sub.unsubscribe();
        });
        if (params['additional']) {
          this.text = data.additional + data.story;
        } else if (params['safe']) {
          this.text = data.safe + data.story;
        } else {
          this.text = data.story;
        }
      }
    });
    step_sub.unsubscribe();
  }
}