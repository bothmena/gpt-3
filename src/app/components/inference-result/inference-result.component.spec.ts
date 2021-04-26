import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InferenceResultComponent } from './inference-result.component';

describe('InferenceResultComponent', () => {
  let component: InferenceResultComponent;
  let fixture: ComponentFixture<InferenceResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InferenceResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InferenceResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
