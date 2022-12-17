import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedesSocialesListComponent } from './redes-sociales-list.component';

describe('RedesSocialesListComponent', () => {
  let component: RedesSocialesListComponent;
  let fixture: ComponentFixture<RedesSocialesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedesSocialesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RedesSocialesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
