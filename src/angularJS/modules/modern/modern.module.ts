import { downgradeComponent } from '@angular/upgrade/static';
import { ModernAddUserComponent } from '../user/add-user/add-user.component';

declare const angular: ng.IAngularStatic;

(() => {
  'use strict';

  const moduleName = 'UsersApp.ModernWidget';

  angular.module(moduleName, []).directive(
    'usrAddUserModal',
    downgradeComponent({ component: ModernAddUserComponent }) as ng.IDirectiveFactory
  );
})();
