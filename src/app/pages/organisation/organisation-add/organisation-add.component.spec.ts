import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganisationAddComponent } from './organisation-add.component';

describe('OrganisationAddComponent', () => {
  let component: OrganisationAddComponent;
  let fixture: ComponentFixture<OrganisationAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OrganisationAddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrganisationAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
