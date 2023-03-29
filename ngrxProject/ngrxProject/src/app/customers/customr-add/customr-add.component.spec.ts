import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomrAddComponent } from './customr-add.component';

describe('CustomrAddComponent', () => {
  let component: CustomrAddComponent;
  let fixture: ComponentFixture<CustomrAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomrAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomrAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
