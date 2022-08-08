import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadAndCreateComponent } from './upload-and-create.component';

describe('UploadAndCreateComponent', () => {
  let component: UploadAndCreateComponent;
  let fixture: ComponentFixture<UploadAndCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadAndCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadAndCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
