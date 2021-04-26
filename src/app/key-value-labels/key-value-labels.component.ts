import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Annotation } from 'src/app/models';

@Component({
  selector: 'app-key-value-labels',
  templateUrl: './key-value-labels.component.html',
  styleUrls: ['./key-value-labels.component.scss']
})
export class KeyValueLabelsComponent implements OnInit {

  @Input() labels: Array<Annotation>;
  @Output() labelsChanged: EventEmitter<Array<Annotation>> = new EventEmitter<Array<Annotation>>();

  constructor() { }

  ngOnInit() {
  }

  onLabelsChanged(): void {
    this.labelsChanged.emit(this.labels);
  }
}
