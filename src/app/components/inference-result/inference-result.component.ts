import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TrainingSample } from 'src/app/models';

@Component({
    selector: 'app-inference-result',
    templateUrl: './inference-result.component.html',
    styleUrls: ['./inference-result.component.scss']
})
export class InferenceResultComponent implements OnInit {

    @Input() sample: TrainingSample;
    @Input() index: number;
    @Input() expandedSampleIndex: number;
    @Output() expandedElementIndexChange: EventEmitter<number> = new EventEmitter<number>();

    constructor() {
    }

    ngOnInit() {
    }

    onExpandedSampleIndexChange() {
        this.expandedElementIndexChange.emit(this.index);
    }
}
