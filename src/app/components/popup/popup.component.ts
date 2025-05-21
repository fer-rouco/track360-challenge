import { Component, effect, inject, input, InputSignal, model, ModelSignal, Renderer2, signal, WritableSignal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Action } from '../action';

@Component({
  selector: 'popup',
  imports: [MatButtonModule],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.scss'
})
export class PopupComponent {
  
  private renderer = inject(Renderer2);

  readonly title: InputSignal<string> = input.required<string>();
  readonly subtitle: InputSignal<string | undefined> = input<string>();
  readonly actions: InputSignal<Array<Action>> = input.required<Array<Action>>();
  readonly display: WritableSignal<string> = signal("none");
  readonly open: ModelSignal<boolean> = model.required();

  constructor() {
    effect(() => {
      this.display.set(this.open() ? "" : "none");
    });
  }
}
