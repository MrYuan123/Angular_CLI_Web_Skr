import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusVisualizationComponent } from './status-visualization.component';

describe('StatusVisualizationComponent', () => {
  let component: StatusVisualizationComponent;
  let fixture: ComponentFixture<StatusVisualizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusVisualizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusVisualizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
