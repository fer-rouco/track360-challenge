import { AfterViewChecked, Component, effect, inject, input, InputSignal, model, ModelSignal, Renderer2, signal, WritableSignal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Action } from '../action';

@Component({
  selector: 'popup',
  imports: [MatButtonModule],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.scss'
})
export class PopupComponent implements AfterViewChecked {
  
  private renderer = inject(Renderer2);

  readonly title: InputSignal<string> = input.required<string>();
  readonly subtitle: InputSignal<string | undefined> = input<string>();
  readonly actions: InputSignal<Array<Action>> = input.required<Array<Action>>();
  readonly display: WritableSignal<string> = signal("none");
  readonly open: ModelSignal<boolean> = model.required();
  readonly initialized: WritableSignal<boolean> = signal<boolean>(false);

  constructor() {
    effect(() => {
      this.initialized.set(false);
      this.display.set(this.open() ? "" : "none");
    });
  }

  ngAfterViewChecked() {
    if (this.open() && !this.initialized()) {
      this.initialized.set(true);
      setTimeout(() => {
        this.actions().forEach(action => {
          if (action.focus) {
            const buttonElement: HTMLButtonElement = this.renderer.selectRootElement(`#${action.id}`, true);
            if (buttonElement) {
              buttonElement.focus();
            }
          }
        });
      });
    }
  }
}
