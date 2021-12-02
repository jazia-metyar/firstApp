import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategComponentComponent } from './categ-component.component';

describe('CategComponentComponent', () => {
  let component: CategComponentComponent;
  let fixture: ComponentFixture<CategComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
