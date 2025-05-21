import { Component, inject, signal, WritableSignal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { PopupComponent } from "../../components/popup/popup.component";
import { RequestADocumentPopupContentComponent } from "../../components/request-a-document-popup-content/request-a-document-popup-content.component";
import { RequestADocumentModel } from '../../model/request-a-document-model';
import { PopupService } from '../../services/popup.service';

@Component({
  selector: 'app-home',
  imports: [MatButtonModule, PopupComponent, RequestADocumentPopupContentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public popupService = inject(PopupService);

  readonly requestADocumentModel: WritableSignal<RequestADocumentModel> = signal<RequestADocumentModel>(<RequestADocumentModel>{ type: "1" });
}
