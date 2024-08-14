import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarPerguntaComponent } from './atualizar-pergunta.component';

describe('AtualizarPerguntaComponent', () => {
  let component: AtualizarPerguntaComponent;
  let fixture: ComponentFixture<AtualizarPerguntaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AtualizarPerguntaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AtualizarPerguntaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
