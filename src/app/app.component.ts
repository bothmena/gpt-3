import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    isTrainingMode = true;
    constructor() {
    }

    toggleTrainingMode(): void {
        this.isTrainingMode = !this.isTrainingMode;
    }
}
