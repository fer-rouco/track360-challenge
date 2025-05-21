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
}
