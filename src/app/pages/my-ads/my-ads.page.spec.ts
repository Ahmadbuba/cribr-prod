import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyAdsPage } from './my-ads.page';

describe('MyAdsPage', () => {
  let component: MyAdsPage;
  let fixture: ComponentFixture<MyAdsPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MyAdsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
