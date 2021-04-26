import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Annotation } from 'src/app/models';

@Component({
    selector: 'app-key-value-pair',
    templateUrl: './key-value-pair.component.html',
    styleUrls: ['./key-value-pair.component.scss']
})
export class KeyValuePairComponent implements OnInit {
    @Input() annotationIndex: number;
    @Input() annotation: Annotation;
    @Output() annotationChanged: EventEmitter<{ index: number; annotation: Annotation }> =
        new EventEmitter<{ index: number; annotation: Annotation }>();
    @Output() popAnnotation: EventEmitter<number> = new EventEmitter<number>();

    constructor() {
    }

    ngOnInit() {
    }

    annotationUpdated(): void {
        this.annotationChanged.emit({
            index: this.annotationIndex,
            annotation: { ...this.annotation },
        });
    }

    removeElement() {
        this.popAnnotation.emit(+this.annotationIndex);
    }
}
