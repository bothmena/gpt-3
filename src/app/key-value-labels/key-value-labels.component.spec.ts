import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyValueLabelsComponent } from './key-value-labels.component';

describe('KeyValueLabelsComponent', () => {
  let component: KeyValueLabelsComponent;
  let fixture: ComponentFixture<KeyValueLabelsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyValueLabelsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyValueLabelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
