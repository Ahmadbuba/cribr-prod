import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterNavPage } from './footer-nav.page';

describe('FooterNavPage', () => {
  let component: FooterNavPage;
  let fixture: ComponentFixture<FooterNavPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(FooterNavPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
