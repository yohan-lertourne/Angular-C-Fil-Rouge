import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StepsService } from '../services/steps.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private stepsservice: StepsService, private router: Router) { }

  ngOnInit(): void {
  }

  onContact(): void {
    document.getElementById('dialog')?.classList.remove('hide');
  }
}
