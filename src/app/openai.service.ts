import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Annotation } from 'src/app/models';
import { map } from 'rxjs/operators';
import { ANNOTATION_SEPARATOR, KEY_VALUE_SEPARATOR, SEPARATOR_LIST } from 'src/app/constant';

@Injectable({
  providedIn: 'root'
})
export class OpenaiService {

  url = 'https://api.openai.com/v1/engines/davinci/completions';
  apiKey = 'sk-IWdTPm02IpKIwunyWR340wTBp9y4GiSioFxMGWuq';

  constructor(private http: HttpClient) {
    // this.train().subscribe(data => console.log(data));
  }

  private getData(trainingText: string): string {
    const data = {
      temperature: 0,
      max_tokens: 50,
      top_p: 1.0,
      frequency_penalty: 0.0,
      presence_penalty: 0.0,
      stop: SEPARATOR_LIST,
      prompt: trainingText,
    };

    return JSON.stringify(data);
  }

  private stringToArray(choices: any): Array<Annotation> {
    choices  = choices.choices[0].text;
    const choicesAsArray = choices.split(ANNOTATION_SEPARATOR);
    const cleanedChoices = choicesAsArray.filter(choice => choice.replace(/\s/g, '').length && choice.indexOf(KEY_VALUE_SEPARATOR) > 0);
    return cleanedChoices.map((choice: string) => {
      const [key, label] = choice.split(KEY_VALUE_SEPARATOR);
      return {
        key,
        label,
      };
    });
  }

  private getHeaders(): any {
    return {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + this.apiKey,
      },
    };
  }

  train(trainingText: string): Observable<{ modelId: string, annotations: Array<Annotation> }> {

    return this.http
        .post(this.url, this.getData(trainingText), this.getHeaders())
        .pipe(
            map(data => ({
              modelId: 'x', // data.id,
              annotations: this.stringToArray(data)
            }))
        );
  }

  // predict(): Array<string> {
  //
  // }
}
