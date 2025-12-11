import { downgradeComponent } from '@angular/upgrade/static';
import { ModernAddUserComponent } from '../user/add-user/add-user.component';

declare const angular: ng.IAngularStatic;

(() => {
  'use strict';

  const moduleName = 'UsersApp.ModernWidget';

  angular.module(moduleName, []).directive(
    'modernAddUser',
    downgradeComponent({ component: ModernAddUserComponent }) as ng.IDirectiveFactory
  );
})();

// declare const angular: ng.IAngularStatic;

// declare global {
//   interface Window {
//     ModernWidgetBridge?: {
//       init(angularRef: ng.IAngularStatic): {
//         moduleName: string;
//         components: {
//           addUser: unknown;
//         };
//       };
//     };
//   }
// }

// const moduleName = "UsersApp.ModernWidget";

// function bootstrapModernWidget() {
//   if (typeof window === "undefined" || !window.ModernWidgetBridge) {
//     console.warn("ModernWidgetBridge is unavailable. The modern Add User widget will not render.");
//     return null;
//   }

//   try {
//     return window.ModernWidgetBridge.init(angular);
//   } catch (error) {
//     console.error("Failed to initialize ModernWidgetBridge", error);
//     return null;
//   }
// }

// const bridgeResult = bootstrapModernWidget();
// const dependencies = bridgeResult ? [bridgeResult.moduleName] : [];

// angular.module(moduleName, dependencies);

// if (bridgeResult) {
//   angular.module(moduleName).directive(
//     "modernAddUser",
//     bridgeResult.components.addUser as ng.IDirectiveFactory
//   );
// } else {
//   angular.module(moduleName).directive("modernAddUser", () => ({
//     restrict: "E",
//     template: "<div class=\"modern-widget-placeholder\">Modern widget bundle missing.</div>"
//   }));
// }

// export {};
