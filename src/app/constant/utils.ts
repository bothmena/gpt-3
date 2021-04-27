import { Annotation } from 'src/app/models';

export const EMPTY_ANNOTATION: Annotation = {
    key: '',
    label: '',
};

export const TRAIN_LABEL_SEP = '\nPredictions:';
export const STOP_LIST = ['####'];
export const KEY_VALUE_SEPARATOR = ':';
export const ANNOTATION_SEPARATOR = '|';

export const LOCAL_STORAGE_KEY = 'training_samples';
