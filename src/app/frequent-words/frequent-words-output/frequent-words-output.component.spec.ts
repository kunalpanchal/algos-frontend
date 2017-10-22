import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrequentWordsOutputComponent } from './frequent-words-output.component';

describe('FrequentWordsOutputComponent', () => {
  let component: FrequentWordsOutputComponent;
  let fixture: ComponentFixture<FrequentWordsOutputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrequentWordsOutputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrequentWordsOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
