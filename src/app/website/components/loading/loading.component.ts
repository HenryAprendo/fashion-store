import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="border border-blue-200 shadow rounded-md p-4 max-w-xs">
      <div class="animate-pulse space-y-3">

        <div class="flex items-center space-x-4">
          <div class="flex-1 h-20 w-20 bg-slate-200 rounded-full"></div>
          <div class="space-y-4">
            <div class="h-3 w-36 bg-slate-200 rounded-md sm:w-20 lg:w-40"></div>
            <div class="h-3 w-36 bg-slate-200 rounded-md sm:w-20 lg:w-40"></div>
            <div class="h-3 w-36 bg-slate-200 rounded-md sm:w-20 lg:w-40"></div>
          </div>
        </div>

        <div class="grid grid-cols-3 rounded space-x-4">
          <div class="h-3 bg-slate-200 col-span-2 rounded-md lg:h-6"></div>
          <div class="h-3 bg-slate-200 col-span-1 rounded-md lg:h-6"></div>
        </div>

      </div>
    </div>
  `,
  styles: [
  ]
})
export class LoadingComponent {

}
