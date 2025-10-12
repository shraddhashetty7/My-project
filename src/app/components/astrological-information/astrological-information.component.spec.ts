import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AstrologicalInformationComponent } from './astrological-information.component';

describe('AstrologicalInformationComponent', () => {
  let component: AstrologicalInformationComponent;
  let fixture: ComponentFixture<AstrologicalInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AstrologicalInformationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AstrologicalInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
