import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestADocumentPopupContentComponent } from './request-a-document-popup-content.component';

describe('RequestADocumentPopupContentComponent', () => {
  let component: RequestADocumentPopupContentComponent;
  let fixture: ComponentFixture<RequestADocumentPopupContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestADocumentPopupContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestADocumentPopupContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
