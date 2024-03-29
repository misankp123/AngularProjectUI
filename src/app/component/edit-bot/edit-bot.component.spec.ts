import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBotComponent } from './edit-bot.component';

describe('EditBotComponent', () => {
  let component: EditBotComponent;
  let fixture: ComponentFixture<EditBotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditBotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
