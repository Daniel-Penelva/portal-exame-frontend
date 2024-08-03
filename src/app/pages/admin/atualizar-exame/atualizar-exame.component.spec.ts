import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarExameComponent } from './atualizar-exame.component';

describe('AtualizarExameComponent', () => {
  let component: AtualizarExameComponent;
  let fixture: ComponentFixture<AtualizarExameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AtualizarExameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AtualizarExameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
