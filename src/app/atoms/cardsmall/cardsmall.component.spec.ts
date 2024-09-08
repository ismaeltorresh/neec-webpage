import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsmallComponent } from './cardsmall.component';

describe('CardsmallComponent', () => {
  let component: CardsmallComponent;
  let fixture: ComponentFixture<CardsmallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardsmallComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardsmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
