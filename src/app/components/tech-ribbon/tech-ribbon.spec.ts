import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechRibbon } from './tech-ribbon';

describe('TechRibbon', () => {
  let component: TechRibbon;
  let fixture: ComponentFixture<TechRibbon>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechRibbon]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechRibbon);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
