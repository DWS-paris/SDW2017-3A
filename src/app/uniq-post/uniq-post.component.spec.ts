import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniqPostComponent } from './uniq-post.component';

describe('UniqPostComponent', () => {
  let component: UniqPostComponent;
  let fixture: ComponentFixture<UniqPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniqPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniqPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
