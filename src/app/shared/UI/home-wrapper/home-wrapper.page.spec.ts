import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeWrapperPage } from './home-wrapper.page';

describe('HomeWrapperPage', () => {
  let component: HomeWrapperPage;
  let fixture: ComponentFixture<HomeWrapperPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HomeWrapperPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
