import { inject } from "@angular/core";
import { CanActivateFn } from "@angular/router";
import { TokenService } from './../services/token.service';
import { Router } from "@angular/router";

export const authGuardFn:CanActivateFn = () => {
  const tokenService = inject(TokenService);
  const router = inject(Router);

  const token = tokenService.get();
  if(!token){
    router.navigate(['/login']);
    return false;
  }
  else {
    return true;
  }

}
