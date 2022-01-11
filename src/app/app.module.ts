import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { TimelineComponent } from './main/timeline/timeline.component';
import { StoryComponent } from './main/story/story.component';
import { ChoicesListComponent } from './main/story/step/choices-list/choices-list.component';
import { ChoiceComponent } from './main/story/step/choices-list/choice/choice.component';
import { AnimatedFaceComponent } from './main/story/animated-face/animated-face.component';
import { ContactComponent } from './main/contact/contact.component';
import { TextComponent } from './main/story/step/text/text.component';
import { StepComponent } from './main/story/step/step.component';

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
    ContactComponent,
    TextComponent,
    StepComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
