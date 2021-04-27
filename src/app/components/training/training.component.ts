import { Component, Input, OnInit } from '@angular/core';
import { Annotation, TrainingSample } from 'src/app/models';
import { ANNOTATION_SEPARATOR, EMPTY_ANNOTATION, KEY_VALUE_SEPARATOR, STOP_LIST, TRAIN_LABEL_SEP } from 'src/app/constant';
import { OpenaiService } from 'src/app/services/openai.service';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
    selector: 'app-training',
    templateUrl: './training.component.html',
    styleUrls: ['./training.component.scss']
})
export class TrainingComponent implements OnInit {

    @Input() isTrainingMode: boolean;
    lastTrainingSampleAsString: string | undefined;
    inferenceResults: Annotation[] = [];

    text = '';
    labels: { [p: number]: Annotation } = {};
    lastIndex = 0;

    constructor(private openAIService: OpenaiService, private localStorageService: LocalStorageService) {
    }

    get validAnnotations(): string {
        const labelsAsText: string = Object.values(this.labels)
            .filter(annotation => annotation.key.length && annotation.label.length)
            .reduce((acc: string, label: Annotation) => {
                return acc + ANNOTATION_SEPARATOR + label.key + KEY_VALUE_SEPARATOR + label.label;
            }, '');

        return labelsAsText.substring(1);
    }

    stringifyTrainingSample(trainingSample: TrainingSample): string {
        return trainingSample.text + TRAIN_LABEL_SEP + this.stringifyAnnotations(trainingSample.annotations) + STOP_LIST[0];
    }

    stringifyAnnotations(annotations: Array<Annotation>): string {
        return annotations.reduce((acc: string, annotation: Annotation) => {
            return acc + ANNOTATION_SEPARATOR + annotation.key + KEY_VALUE_SEPARATOR + annotation.label;
        }, '').substring(1);
    }

    ngOnInit() {
        const savedTrainingSampleCount = Object.keys(this.localStorageService.trainingSamples).length;
        if (savedTrainingSampleCount) {
            const trainingSample = this.localStorageService.trainingSamples[savedTrainingSampleCount - 1];
            this.lastTrainingSampleAsString = trainingSample.text + TRAIN_LABEL_SEP
                + this.stringifyAnnotations(trainingSample.annotations) + STOP_LIST[0];
        }
    }

    trainModel(): void {
        if (!this.lastTrainingSampleAsString) {
            return;
        }
        const trainingData = this.lastTrainingSampleAsString + this.text;
        this.openAIService.train(trainingData).subscribe(
            ({ annotations }: { modelId: string, annotations: Array<Annotation> }) => this.labels = annotations
                .reduce((acc: {[n: number]: Annotation}, annotation: Annotation, index: number) => ({...acc, [index]: annotation}), {}),
            (error) => console.log(error),
        );
    }

    inferModel(): void {
        let trainingData = Object.values(this.localStorageService.trainingSamples)
            .reduce((acc: string, trainingSample: TrainingSample) => acc + this.stringifyTrainingSample(trainingSample), '');
        trainingData += this.text;
        this.openAIService.train(trainingData).subscribe(
            ({ annotations }: { modelId: string, annotations: Array<Annotation> }) => this.inferenceResults = annotations,
            (error) => console.log(error),
        );
    }

    saveTrainingSample(): void {
        const validAnnotations: Array<Annotation> = this.getValidAnnotations();
        if (this.text.length && validAnnotations.length) {
            this.localStorageService.saveTrainingSample({
                text: this.text,
                annotations: validAnnotations,
            });
            this.updateLastTrainingSample();
            this.text = '';
            this.labels = { 0: EMPTY_ANNOTATION };
        }
    }

    addLabel() {
        this.labels[++this.lastIndex] = EMPTY_ANNOTATION;
    }

    onLabelsChanged(labels: { [p: number]: Annotation }) {
        this.labels = { ...labels };
    }

    private getValidAnnotations(): Array<Annotation> {
        return Object.values(this.labels)
            .filter(annotation => annotation.key.length && annotation.label.length);
    }

    private updateLastTrainingSample(): void {
        this.lastTrainingSampleAsString = this.text + TRAIN_LABEL_SEP + this.validAnnotations + STOP_LIST[0];
    }
}
