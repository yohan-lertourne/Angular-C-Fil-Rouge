import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { TimelineComponent } from './timeline/timeline.component';
import { StoryComponent } from './story/story.component';
import { ChoicesListComponent } from './choices-list/choices-list.component';
import { ChoiceComponent } from './choice/choice.component';
import { AnimatedFaceComponent } from './animated-face/animated-face.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    TimelineComponent,
    StoryComponent,
    ChoicesListComponent,
    ChoiceComponent,
    AnimatedFaceComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
