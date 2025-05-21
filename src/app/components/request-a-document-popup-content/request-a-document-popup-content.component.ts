import { Component, model, ModelSignal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RequestADocumentModel } from '../../model/request-a-document-model';

@Component({
  selector: 'request-a-document-popup-content',
  imports: [FormsModule],
  templateUrl: './request-a-document-popup-content.component.html',
  styleUrl: './request-a-document-popup-content.component.scss'
})
export class RequestADocumentPopupContentComponent {
  readonly model: ModelSignal<RequestADocumentModel> = model.required();

}
