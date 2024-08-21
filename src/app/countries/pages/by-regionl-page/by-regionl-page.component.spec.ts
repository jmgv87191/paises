import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByRegionlPageComponent } from './by-regionl-page.component';

describe('ByRegionlPageComponent', () => {
  let component: ByRegionlPageComponent;
  let fixture: ComponentFixture<ByRegionlPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ByRegionlPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ByRegionlPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
