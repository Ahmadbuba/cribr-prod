import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailBodyPage } from './detail-body.page';

describe('DetailBodyPage', () => {
  let component: DetailBodyPage;
  let fixture: ComponentFixture<DetailBodyPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DetailBodyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
