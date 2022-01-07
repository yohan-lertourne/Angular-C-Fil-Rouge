import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Step } from 'src/app/models/step.model';
import { StepsService } from 'src/app/services/steps.service';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.scss']
})
export class ChoiceComponent implements OnInit {

  @Input() text!: string;

  constructor(private StepsService: StepsService, private activeRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
  }

  onChoice() {
    let next_id = +this.activeRoute.snapshot.params['id'] + 1;
    this.StepsService.subject.next(next_id);
    this.router.navigate(['/story/steps/', next_id]);
  }
}