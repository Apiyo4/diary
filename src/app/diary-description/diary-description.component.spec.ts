import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaryDescriptionComponent } from './diary-description.component';

describe('DiaryDescriptionComponent', () => {
  let component: DiaryDescriptionComponent;
  let fixture: ComponentFixture<DiaryDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiaryDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaryDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
