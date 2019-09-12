import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// ngrx
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './ngrx/counter.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyCounterComponent } from './components/my-counter/my-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    MyCounterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ counters: counterReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25 })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
