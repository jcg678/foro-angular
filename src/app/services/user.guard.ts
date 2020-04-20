import {Injectable} from '@angular/core';
import { Router, CanActivate} from '@angular/router';
import { UserService } from './user.service';
import { identity } from 'rxjs';

@Injectable()
export class UserGuard implements CanActivate {
  constructor(
    private _router: Router,
    private _userService: UserService
  ) {
  }

  canActivate() {
    const identity = this._userService.getIdentity();

    if (identity && identity.name) {
      return true;
    } else {
      this._router.navigate(['/inicio']);
      return false;
    }
  }
}
