import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomrComponent } from './customr.component';

describe('CustomrComponent', () => {
  let component: CustomrComponent;
  let fixture: ComponentFixture<CustomrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
