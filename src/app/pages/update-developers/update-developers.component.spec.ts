import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDevelopersComponent } from './update-developers.component';

describe('UpdateDevelopersComponent', () => {
  let component: UpdateDevelopersComponent;
  let fixture: ComponentFixture<UpdateDevelopersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateDevelopersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateDevelopersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
