import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleFormularComponent } from './example-formular.component';

describe('ExampleFormularComponent', () => {
  let component: ExampleFormularComponent;
  let fixture: ComponentFixture<ExampleFormularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExampleFormularComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExampleFormularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
