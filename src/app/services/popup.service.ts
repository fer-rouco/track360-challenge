import { Injectable, WritableSignal, signal } from '@angular/core';
import { Action } from '../components/action';

@Injectable({
  providedIn: 'root'
})
export class PopupService {
  readonly openSignal: WritableSignal<boolean> = signal<boolean>(false);

  open(): void {
    this.openSignal.set(true);
  }
  
  close(): void {
    this.openSignal.set(false);
  }

  confirmActions(confirmFn?: () => void): Array<Action> {
    return [
      { id: "confirm", content: "Confirm", fn: () => { this.close(); confirmFn ? confirmFn() : null; }, focus: true }
    ];
  }

  okCancelActions(okFn?: () => void): Array<Action> {
    return [
      { id: "cancel", content: "Cancel", fn: () => { this.close(); } },
      { id: "ok", content: "Ok", fn: () => { this.close(); okFn ? okFn() : null; }, focus: true }
    ];
  }
  
  yesNoActions(yesFn?: () => void): Array<Action> {
    return [
      { id: "no", content: "No", fn: () => { this.close(); } },
      { id: "yes", content: "Yes", fn: () => { this.close(); yesFn ? yesFn() : null; }, focus: true }
    ];
  }
}
