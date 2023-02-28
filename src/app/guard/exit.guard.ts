import { CanDeactivateFn } from "@angular/router";
import { Observable } from "rxjs";

export interface OnExit {
  onExit: () => Observable<boolean> | Promise<boolean> | boolean;
}

export const CanDeactivateGuard:CanDeactivateFn<OnExit> = (component:OnExit) => {
  return component.onExit ? component.onExit() : true;
}

