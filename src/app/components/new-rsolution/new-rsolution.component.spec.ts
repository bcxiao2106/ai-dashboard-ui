import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRsolutionComponent } from './new-rsolution.component';

describe('NewRsolutionComponent', () => {
  let component: NewRsolutionComponent;
  let fixture: ComponentFixture<NewRsolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewRsolutionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewRsolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
