import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { TimelineComponent } from './main/timeline/timeline.component';
import { StoryComponent } from './main/story/story.component';
import { ChoicesListComponent } from './main/story/choices-list/choices-list.component';
import { ChoiceComponent } from './main/story/choices-list/choice/choice.component';
import { AnimatedFaceComponent } from './main/animated-face/animated-face.component';
import { ContactComponent } from './main/contact/contact.component';
import { TextComponent } from './main/story/text/text.component';

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
    TextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
