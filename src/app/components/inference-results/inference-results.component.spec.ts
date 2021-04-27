import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InferenceResultsComponent } from 'src/app/components/inference-results/inference-results.component';

describe('InferenceResultsComponent', () => {
    let component: InferenceResultsComponent;
    let fixture: ComponentFixture<InferenceResultsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [InferenceResultsComponent]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(InferenceResultsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
