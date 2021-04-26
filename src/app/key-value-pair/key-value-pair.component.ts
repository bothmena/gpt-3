import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Annotation } from 'src/app/models';

@Component({
  selector: 'app-key-value-pair',
  templateUrl: './key-value-pair.component.html',
  styleUrls: ['./key-value-pair.component.scss']
})
export class KeyValuePairComponent implements OnInit {

  @Input() key: string;
  @Input() label: string;
  @Output() annotationChanged: EventEmitter<Annotation> = new EventEmitter<Annotation>();

  constructor() { }

  ngOnInit() {
  }

  annotationUpdated(): void {
    this.annotationChanged.emit({
      key: this.key,
      label: this.label,
    });
  }
}
