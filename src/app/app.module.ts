import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { KeyValueLabelsComponent } from './components/key-value-labels/key-value-labels.component';
import { TrainingComponent } from './components/training/training.component';
import { InferenceResultsComponent } from './components/inference-results/inference-results.component';
import { KeyValuePairComponent } from './components/key-value-pair/key-value-pair.component';
import { HttpClientModule } from '@angular/common/http';
import { InferenceResultComponent } from './components/inference-result/inference-result.component';

@NgModule({
    declarations: [
        AppComponent,
        KeyValueLabelsComponent,
        TrainingComponent,
        InferenceResultsComponent,
        KeyValuePairComponent,
        InferenceResultComponent
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
export class AppModule {
}
