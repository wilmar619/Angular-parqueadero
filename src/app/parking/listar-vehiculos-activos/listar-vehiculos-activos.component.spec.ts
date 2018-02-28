import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarVehiculosActivosComponent } from './listar-vehiculos-activos.component';

describe('ListarVehiculosActivosComponent', () => {
  let component: ListarVehiculosActivosComponent;
  let fixture: ComponentFixture<ListarVehiculosActivosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarVehiculosActivosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarVehiculosActivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
