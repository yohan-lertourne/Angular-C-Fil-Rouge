import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Choice } from 'src/app/models/choice.model';
import { StepsService } from 'src/app/services/steps.service';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.scss']
})
export class ChoiceComponent implements OnInit {

  @Input() choice!: Choice;
  rank!: number;

  constructor(private StepsService: StepsService, private activeRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.rank = this.choice.id % 3;
  }

  onChoice(): void {
    let next_id = +this.activeRoute.snapshot.params['id'] + 1;
    switch (this.rank) {
      case 1:
        this.StepsService.subject.next(next_id);
        this.router.navigate(['/story/steps/', next_id, { additional: true }]);
        break;
      case 0:
        if (this.getRandomInt(2) === 0) {
          this.StepsService.subject.next(12);
          this.router.navigate(['/story/steps/', next_id, { death: true }]);
        } else {
          this.StepsService.subject.next(next_id);
          this.router.navigate(['/story/steps/', next_id, { safe: true }]);
        }
        break;
      default:
        this.StepsService.subject.next(next_id);
        this.router.navigate(['/story/steps/', next_id]);
    }
  }

  getRandomInt(max: number): number {
    return Math.floor(Math.random() * max);
  }
}