import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyNumberProfileComponent } from './verify-number-profile.component';

describe('VerifyNumberProfileComponent', () => {
  let component: VerifyNumberProfileComponent;
  let fixture: ComponentFixture<VerifyNumberProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerifyNumberProfileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerifyNumberProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
