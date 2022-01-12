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

  private sub!: Subscription;

  myObserver = { next: (id: number) => this.loadBackgroundImage(id) };

  constructor(private stepsservice: StepsService, private router: Router) { }

  ngOnInit(): void {
    this.router.navigate(['/story']);
    this.sub = this.stepsservice.subject.subscribe(this.myObserver);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  loadBackgroundImage(id: number) {
    let main = document.getElementsByClassName('main')[0] as HTMLElement;
    let step = this.stepsservice.getAPIStep(id);
    step.subscribe((data:any) =>{
      let theme = this.stepsservice.getAPITheme(data.themes);
      theme.subscribe((data:any) => {
        main.style.backgroundImage = `url(${data.background})`;
      })
      
    })
  }
}