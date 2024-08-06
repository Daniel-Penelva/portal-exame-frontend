import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPerguntaComponent } from './add-pergunta.component';

describe('AddPerguntaComponent', () => {
  let component: AddPerguntaComponent;
  let fixture: ComponentFixture<AddPerguntaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddPerguntaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddPerguntaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
