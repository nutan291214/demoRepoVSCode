import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TheIfComponentComponent } from './the-if-component.component';

describe('TheIfComponentComponent', () => {
  let component: TheIfComponentComponent;
  let fixture: ComponentFixture<TheIfComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheIfComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheIfComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
