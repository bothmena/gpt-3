import { Component, Input, OnInit } from '@angular/core';
import { Annotation } from 'src/app/models';
import { ANNOTATION_SEPARATOR, EMPTY_ANNOTATION, KEY_VALUE_SEPARATOR, SEPARATOR_LIST } from 'src/app/constant';
import { OpenaiService } from 'src/app/openai.service';

@Component({
    selector: 'app-training',
    templateUrl: './training.component.html',
    styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {

    @Input() isTrainingMode: boolean;
    text = 'Lenovo IdeaPad 100-15IBD 80QQ002DUS 15.6"" 16:9 Notebook - Intel Core i3 (5th Gen) i3-5020U ' +
        'Dual-core (2 Core) 2.20 GHz';
    labels: { [p: number]: Annotation } = {
        0: {
            key: 'Screen Size',
            label: '15.6',
        },
        1: {
            key: 'Brand',
            label: 'Lenovo',
        },
        2: EMPTY_ANNOTATION,
    };
    lastIndex = 2;
    trainingOutput: {
        result: string;
        annotations: Array<Annotation>;
        modelId: string;
    };

    constructor(private openAIService: OpenaiService) {
    }

    get trainingData(): string {
        return this.text + '\n Predictions:' + this.annotations + SEPARATOR_LIST[0]
            + 'Dell Inspiron 15 5000 i5567 15.6"" Laptop, Touchscreen, Windows 10 Home, Intel Core i7-7500U Processor, ' +
            '16GB RAM, 1TB Hard Drive\nPredictions:';
    }

    get annotations(): string {
        let labels = Object.values(this.labels);
        labels = labels.filter(label => label.label.length && label.key.length);
        let text = '';
        labels.forEach(label => text = text + ANNOTATION_SEPARATOR + label.key + KEY_VALUE_SEPARATOR + label.label);

        return text.substring(1);
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

    inferModel(): void {

    }

    saveTrainingSample(): void {

    }

    addLabel() {
        this.labels[++this.lastIndex] = EMPTY_ANNOTATION;
    }

    onLabelsChanged(labels: { [p: number]: Annotation }) {
        this.labels = { ...labels };
    }
}
