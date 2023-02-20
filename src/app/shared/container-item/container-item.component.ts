import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-container-item',
  template: `
    <div class="flex justify-between py-4" [class.border-b]="border">
      <ng-content></ng-content>
    </div>
  `,
  styles: [
  ]
})
export class ContainerItemComponent {

  @Input() border:boolean = true;

}
