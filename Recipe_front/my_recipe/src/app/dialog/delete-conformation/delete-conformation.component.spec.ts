import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteConformationComponent } from './delete-conformation.component';

describe('DeleteConformationComponent', () => {
  let component: DeleteConformationComponent;
  let fixture: ComponentFixture<DeleteConformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteConformationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteConformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
