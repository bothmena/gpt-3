import { Component, OnInit } from '@angular/core';
import { TrainingSample } from 'src/app/models';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
    selector: 'app-inference-results',
    templateUrl: './inference-results.component.html',
    styleUrls: ['./inference-results.component.scss']
})
export class InferenceResultsComponent implements OnInit {
    trainingSamples: Array<TrainingSample> = [];
    expandedSampleIndex = 0;

    constructor(private localStorageService: LocalStorageService) {
    }

    ngOnInit() {
        this.localStorageService.trainingSamples$.subscribe(samples => this.trainingSamples = Object.values(samples));
    }
}
