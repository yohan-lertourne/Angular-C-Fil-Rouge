import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StepComponent } from './main/story/step/step.component';
import { StoryComponent } from './main/story/story.component';

const routes: Routes = [
  {
    path: 'story', component: StoryComponent, children: [
      { path: 'step', component: StepComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
