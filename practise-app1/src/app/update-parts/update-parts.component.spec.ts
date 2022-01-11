import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePartsComponent } from './update-parts.component';

describe('UpdatePartsComponent', () => {
  let component: UpdatePartsComponent;
  let fixture: ComponentFixture<UpdatePartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
