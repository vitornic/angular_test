import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDevelopersComponent } from './add-developers.component';

describe('AddDevelopersComponent', () => {
  let component: AddDevelopersComponent;
  let fixture: ComponentFixture<AddDevelopersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDevelopersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDevelopersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
