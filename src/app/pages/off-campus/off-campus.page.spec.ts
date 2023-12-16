import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OffCampusPage } from './off-campus.page';

describe('OffCampusPage', () => {
  let component: OffCampusPage;
  let fixture: ComponentFixture<OffCampusPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OffCampusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
