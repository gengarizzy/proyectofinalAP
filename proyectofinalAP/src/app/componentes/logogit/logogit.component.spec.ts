import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogogitComponent } from './logogit.component';

describe('LogogitComponent', () => {
  let component: LogogitComponent;
  let fixture: ComponentFixture<LogogitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogogitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogogitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
