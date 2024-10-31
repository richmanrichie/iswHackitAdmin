import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganisationViewComponent } from './organisation-view.component';

describe('OrganisationViewComponent', () => {
  let component: OrganisationViewComponent;
  let fixture: ComponentFixture<OrganisationViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganisationViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganisationViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
