import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionsNavComponent } from './actions-nav.component';

describe('ActionsNavComponent', () => {
  let component: ActionsNavComponent;
  let fixture: ComponentFixture<ActionsNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionsNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionsNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
