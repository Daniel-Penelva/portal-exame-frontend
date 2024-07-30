import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewExamesComponent } from './view-exames.component';

describe('ViewExamesComponent', () => {
  let component: ViewExamesComponent;
  let fixture: ComponentFixture<ViewExamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewExamesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewExamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
