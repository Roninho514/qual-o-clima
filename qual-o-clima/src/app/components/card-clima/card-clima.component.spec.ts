import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardClimaComponent } from './card-clima.component';

describe('CardClimaComponent', () => {
  let component: CardClimaComponent;
  let fixture: ComponentFixture<CardClimaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardClimaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardClimaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
