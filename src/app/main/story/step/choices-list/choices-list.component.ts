import { Component, Input, OnInit } from '@angular/core';
import { Choice } from 'src/app/models/choice.model';

@Component({
  selector: 'app-choices-list',
  templateUrl: './choices-list.component.html',
  styleUrls: ['./choices-list.component.scss']
})
export class ChoicesListComponent implements OnInit {
  @Input() choices!: Choice[];
 
  constructor() { }

  ngOnInit(): void {
  }

}
