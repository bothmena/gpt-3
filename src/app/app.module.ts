import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { KeyValueLabelsComponent } from './key-value-labels/key-value-labels.component';
import { TrainingComponent } from './training/training.component';
import { PredictionComponent } from './prediction/prediction.component';
import { KeyValuePairComponent } from './key-value-pair/key-value-pair.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    KeyValueLabelsComponent,
    TrainingComponent,
    PredictionComponent,
    KeyValuePairComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
