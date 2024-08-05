import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewExamePerguntasComponent } from './view-exame-perguntas.component';

describe('ViewExamePerguntasComponent', () => {
  let component: ViewExamePerguntasComponent;
  let fixture: ComponentFixture<ViewExamePerguntasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewExamePerguntasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewExamePerguntasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
