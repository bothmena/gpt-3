import { Component, OnInit } from '@angular/core';
import { Annotation } from 'src/app/models';
import { KEY_VALUE_SEPARATOR, EMPTY_ANNOTATION, SEPARATOR_LIST, ANNOTATION_SEPARATOR } from 'src/app/constant';
import { OpenaiService } from 'src/app/openai.service';
import { catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Component({
    selector: 'app-training',
    templateUrl: './training.component.html',
    styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {

    trainingText = 'Lenovo IdeaPad 100-15IBD 80QQ002DUS 15.6"" 16:9 Notebook - Intel Core i3 (5th Gen) i3-5020U Dual-core (2 Core) 2.20 GHz';
    labels: Array<Annotation> = [
        {
            key: 'Screen Size',
            label: '15.6',
        },
        {
            key: 'Brand',
            label: 'Lenovo',
        },
        EMPTY_ANNOTATION,
    ];
    trainingOutput: {
        result: string;
        annotations: Array<Annotation>;
        modelId: string;
    };

    constructor(private openAIService: OpenaiService) {
    }

    get trainingData(): string {
        return this.trainingText + '\n Predictions:' + this.annotations + SEPARATOR_LIST[0]
            + 'Dell Inspiron 15 5000 i5567 15.6"" Laptop, Touchscreen, Windows 10 Home, Intel Core i7-7500U Processor, 16GB RAM, 1TB Hard Drive\nPredictions:';
    }

    get annotations(): string {
        let labels = [...this.labels];
        labels = labels.filter(label => label.label.length && label.key.length);
        let text = '';
        labels.forEach(label => text = text + ANNOTATION_SEPARATOR + label.key + KEY_VALUE_SEPARATOR + label.label);

        return text.substring(1); // labels.join(ANNOTATION_SEPARATOR);
    }

    ngOnInit() {
    }

    trainModel(): void {
        this.openAIService.train(this.trainingData).subscribe(
            ({ modelId, annotations }: { modelId: string, annotations: Array<Annotation> }) => {
                this.trainingOutput = {
                    result: 'Success',
                    annotations,
                    modelId,
                };
            },
            (error) => console.log(error),
        );
    }

    addLabel() {
        this.labels.push(EMPTY_ANNOTATION);
    }
}
