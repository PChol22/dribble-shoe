import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ItemComponent } from './item/item.component';
import { BubbleComponent } from './bubble/bubble.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ItemComponent,
    BubbleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
