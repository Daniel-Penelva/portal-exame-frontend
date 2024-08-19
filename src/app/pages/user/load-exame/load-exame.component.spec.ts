import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadExameComponent } from './load-exame.component';

describe('LoadExameComponent', () => {
  let component: LoadExameComponent;
  let fixture: ComponentFixture<LoadExameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoadExameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LoadExameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
