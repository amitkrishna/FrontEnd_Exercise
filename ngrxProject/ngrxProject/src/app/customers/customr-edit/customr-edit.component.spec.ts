import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomrEditComponent } from './customr-edit.component';

describe('CustomrEditComponent', () => {
  let component: CustomrEditComponent;
  let fixture: ComponentFixture<CustomrEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomrEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomrEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
