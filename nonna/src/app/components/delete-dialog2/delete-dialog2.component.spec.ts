import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDialog2Component } from './delete-dialog2.component';

describe('DeleteDialog2Component', () => {
  let component: DeleteDialog2Component;
  let fixture: ComponentFixture<DeleteDialog2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteDialog2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteDialog2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
