import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Step } from '../models/step.model';
import { StepsService } from '../services/steps.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  step :any;
  private sub!: Subscription;
  myObserver = { next: (id: number) => this.loadBackgroundImage(id) };

  constructor(private stepsservice: StepsService, private router: Router) { }

  ngOnInit(): void {
    this.router.navigate(['/story']);
    this.sub = this.stepsservice.subject.subscribe(this.myObserver);
    this.getStep();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  loadBackgroundImage(id: number) {
    let main = document.getElementsByClassName('main')[0] as HTMLElement;
    let step = this.stepsservice.getStepById(id) as Step;
    main.style.backgroundImage = `url(${step.theme.background})`;
  }

  getStep(){
    this.stepsservice.getAPIStep(2).subscribe((data:any)=>{
        this.step = data;
        console.log('data',this.step.death);
        
    })
  }
}