import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatableListComponent } from './datatable-list.component';

describe('DatatableListComponent', () => {
  let component: DatatableListComponent;
  let fixture: ComponentFixture<DatatableListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatatableListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatatableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
