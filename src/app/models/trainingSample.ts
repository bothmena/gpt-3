import { Annotation } from './annotation';

export interface TrainingSample {
    text: string;
    annotations: Array<Annotation>;
}
