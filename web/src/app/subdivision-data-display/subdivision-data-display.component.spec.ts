import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubdivisionDataDisplayComponent } from './subdivision-data-display.component';

describe('SubdivisionDataDisplayComponent', () => {
  let component: SubdivisionDataDisplayComponent;
  let fixture: ComponentFixture<SubdivisionDataDisplayComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      declarations: [ SubdivisionDataDisplayComponent ]
    })
    
    // fixture = TestBed.createComponent(SubdivisionDataDisplayComponent);
    // component = fixture.componentInstance;
    // fixture.detectChanges();
    component = TestBed.inject(SubdivisionDataDisplayComponent);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
