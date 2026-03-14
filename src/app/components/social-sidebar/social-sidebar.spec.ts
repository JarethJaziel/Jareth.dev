import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialSidebar } from './social-sidebar';

describe('SocialSidebar', () => {
  let component: SocialSidebar;
  let fixture: ComponentFixture<SocialSidebar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialSidebar]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SocialSidebar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
