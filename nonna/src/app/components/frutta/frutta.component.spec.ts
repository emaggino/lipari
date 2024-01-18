import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FruttaComponent } from './frutta.component';

describe('FruttaComponent', () => {
  let component: FruttaComponent;
  let fixture: ComponentFixture<FruttaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FruttaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FruttaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
