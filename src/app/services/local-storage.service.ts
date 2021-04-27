import { Injectable } from '@angular/core';
import { TrainingSample } from 'src/app/models';
import { LOCAL_STORAGE_KEY } from 'src/app/constant';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LocalStorageService {

    trainingSamples: { [index: number]: TrainingSample } = {};
    trainingSamples$: BehaviorSubject<{ [index: number]: TrainingSample }> = new BehaviorSubject<{[p: number]: TrainingSample}>({});

    constructor() {

        this.loadSavedTrainingSamples();
    }

    saveTrainingSample(sample: TrainingSample): void {
        this.trainingSamples = {...this.trainingSamples, [Object.keys(this.trainingSamples).length]: sample};
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(this.trainingSamples));
        this.trainingSamples$.next(this.trainingSamples);
    }

    loadSavedTrainingSamples(): void {
        const jsonSamples: string = localStorage.getItem(LOCAL_STORAGE_KEY);
        this.trainingSamples = JSON.parse(jsonSamples) || {};
        this.trainingSamples$.next(this.trainingSamples);
    }
}
