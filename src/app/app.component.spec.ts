import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { SwUpdate } from '@angular/service-worker';
import { of } from 'rxjs';

describe('AppComponent', () => {
  let swUpdateMock: Partial<SwUpdate>;

  beforeEach(async () => {
    swUpdateMock = {
      isEnabled: false,
      versionUpdates: of(),
    };

    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        { provide: SwUpdate, useValue: swUpdateMock },
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
