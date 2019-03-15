import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationVisualizationComponent } from './location-visualization.component';

describe('LocationVisualizationComponent', () => {
  let component: LocationVisualizationComponent;
  let fixture: ComponentFixture<LocationVisualizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationVisualizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationVisualizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
