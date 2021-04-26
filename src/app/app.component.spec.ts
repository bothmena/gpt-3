import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Component } from '@angular/core';

@Component({selector: 'app-training', template: 'app training works'})
class AppTrainingMockComponent {
}

@Component({selector: 'app-prediction', template: 'app prediction works'})
class AppPredictionMockComponent {
}

describe('AppComponent', () => {

    let fixture: ComponentFixture<AppComponent>;
    let component: AppComponent;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                AppComponent,
                AppTrainingMockComponent,
                AppPredictionMockComponent,
            ],
        }).compileComponents();

        fixture = TestBed.createComponent(AppComponent);
        component = fixture.debugElement.componentInstance;
    }));

    it('should create the app', () => {
        expect(component).toBeTruthy();
    });

    it(`should have isTrainingMode set to 'true' by default`, () => {
        expect(component.isTrainingMode).toEqual(true);
    });

    it('should set isTraining to false if it was set to true', () => {
        component.isTrainingMode = true;
        component.toggleTrainingMode();
        fixture.detectChanges();

        expect(component.isTrainingMode).toBe(false);
    });

    it('should set isTraining to true if it was set to false', () => {
        component.isTrainingMode = false;
        component.toggleTrainingMode();
        fixture.detectChanges();

        expect(component.isTrainingMode).toBe(true);
    });

    /*it('should render title', () => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('.content span').textContent).toContain('levity-app app is running!');
    });*/
});
