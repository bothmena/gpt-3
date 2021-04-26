import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Annotation } from 'src/app/models';

@Component({
    selector: 'app-key-value-labels',
    templateUrl: './key-value-labels.component.html',
    styleUrls: ['./key-value-labels.component.scss']
})
export class KeyValueLabelsComponent implements OnInit {

    @Input() labels: { [index: number]: Annotation };
    @Output() labelsChanged: EventEmitter<{ [index: number]: Annotation }> = new EventEmitter<{ [index: number]: Annotation }>();

    constructor() {
    }

    ngOnInit() {
    }

    updateAnnotation({index, annotation}: {index: number; annotation: Annotation}): void {
        this.labelsChanged.emit({ ...this.labels, [index]: annotation });
    }

    removeAnnotationAt(index: number): void {
        const { [index]: _, ...rest } = this.labels;
        this.labels = rest;
    }
}
