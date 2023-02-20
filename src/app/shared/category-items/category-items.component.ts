import { Component, Input } from '@angular/core';
import { CategoryList } from './../../util/category';

@Component({
  selector: 'app-category-items',
  template: `
    <a
      class="block mb-1 text-base font-medium p-1 pl-2 rounded hover:bg-slate-600 hover:text-white"
      [routerLink]="[item.path, { category: item.category}]"
    >
      {{item.name}}
    </a>
  `,
  styles: [
  ]
})
export class CategoryItemsComponent {

  @Input() item!:CategoryList;

}
