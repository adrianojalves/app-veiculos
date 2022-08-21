import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyFooterComponent } from './my-footer/my-footer.component';
import { MyHeaderComponent } from './my-header/my-header.component';

@NgModule({
  declarations: [
    AppComponent,
    MyFooterComponent,
    MyHeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
