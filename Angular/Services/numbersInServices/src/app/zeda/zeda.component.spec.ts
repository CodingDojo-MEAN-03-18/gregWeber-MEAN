import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZedaComponent } from './zeda.component';

describe('ZedaComponent', () => {
  let component: ZedaComponent;
  let fixture: ComponentFixture<ZedaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZedaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
