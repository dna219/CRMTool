import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOffComponent } from './work-off.component';

describe('WorkOffComponent', () => {
  let component: WorkOffComponent;
  let fixture: ComponentFixture<WorkOffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkOffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkOffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
