import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSectioComponent } from './main-sectio.component';

describe('MainSectioComponent', () => {
  let component: MainSectioComponent;
  let fixture: ComponentFixture<MainSectioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainSectioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainSectioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
