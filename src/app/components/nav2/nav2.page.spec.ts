import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Nav2Page } from './nav2.page';

describe('Nav2Page', () => {
  let component: Nav2Page;
  let fixture: ComponentFixture<Nav2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Nav2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
