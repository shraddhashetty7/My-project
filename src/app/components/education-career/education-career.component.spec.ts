import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducationCareerComponent } from './education-career.component';

describe('EducationCareerComponent', () => {
  let component: EducationCareerComponent;
  let fixture: ComponentFixture<EducationCareerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EducationCareerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EducationCareerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
