import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StepsService } from '../services/steps.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private stepsservice: StepsService, private router: Router) { }

  onHome(): void {
    this.stepsservice.subject.next(1);
    this.router.navigate(['/story/steps/', 1]);
  }

  onContact(): void {
    document.getElementById('dialog')?.classList.remove('hide');
  }
}
