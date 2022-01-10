import { Component, Input} from '@angular/core';
import { Choice } from 'src/app/models/choice.model';

@Component({
  selector: 'app-choices-list',
  templateUrl: './choices-list.component.html',
  styleUrls: ['./choices-list.component.scss']
})
export class ChoicesListComponent {
  
  @Input() choices!: Choice[];

}
