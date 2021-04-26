import { Component, OnInit } from '@angular/core';
import { TrainingSample } from 'src/app/models';

@Component({
    selector: 'app-inference-results',
    templateUrl: './inference-results.component.html',
    styleUrls: ['./inference-results.component.scss']
})
export class InferenceResultsComponent implements OnInit {
    trainingSamples: Array<TrainingSample> = [
        {
            text: 'this some text coming from me and I am trying to make it long enough',
            annotations: [
                { key: 'GPU', label: 'Nvidia 1080Ti', },
                { key: 'CPU', label: 'Intel i7 103823', },
                { key: 'Storage', label: '512GB SSD', },
                { key: 'Model', label: 'Some Model', },
                { key: 'Brand', label: 'Dell', },
            ]
        },
        {
            text: 'this some text coming from me and I am trying to make it long enough',
            annotations: [
                { key: 'GPU', label: 'Nvidia 1080Ti', },
                { key: 'CPU', label: 'Intel i7 103823', },
                { key: 'Storage', label: '512GB SSD', },
                { key: 'Model', label: 'Some Model', },
                { key: 'Brand', label: 'Dell', },
            ]
        },
        {
            text: 'this some text coming from me and I am trying to make it long enough',
            annotations: [
                { key: 'GPU', label: 'Nvidia 1080Ti', },
                { key: 'CPU', label: 'Intel i7 103823', },
                { key: 'Storage', label: '512GB SSD', },
                { key: 'Model', label: 'Some Model', },
                { key: 'Brand', label: 'Dell', },
            ]
        },
        {
            text: 'this some text coming from me and I am trying to make it long enough',
            annotations: [
                { key: 'GPU', label: 'Nvidia 1080Ti', },
                { key: 'CPU', label: 'Intel i7 103823', },
                { key: 'Storage', label: '512GB SSD', },
                { key: 'Model', label: 'Some Model', },
                { key: 'Brand', label: 'Dell', },
            ]
        },
    ];
    expandedSampleIndex = 0;

    constructor() {
    }

    ngOnInit() {
    }
}
