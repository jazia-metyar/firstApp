import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifPersonComponent } from './modif-person.component';

describe('ModifPersonComponent', () => {
  let component: ModifPersonComponent;
  let fixture: ComponentFixture<ModifPersonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifPersonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
