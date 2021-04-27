import { Component } from '@angular/core';
import { LocalStorageService } from 'src/app/services/local-storage.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    isTrainingMode = true;
    constructor(private localStorageService: LocalStorageService) {
    }

    toggleTrainingMode(): void {
        this.isTrainingMode = !this.isTrainingMode;
    }
}
