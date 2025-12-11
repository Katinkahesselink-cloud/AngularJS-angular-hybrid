import "./admin/admin.module";
import "./user/user.module";
import "./common/common.module";
import "./helpers/helpers.module";
import "./modern/modern.module";
import { appDirective } from "./app/app";

declare const angular: ng.IAngularStatic;

(() => {
  "use strict";

  const moduleName = "UsersApp";

  angular.module(moduleName, [
    "ngRoute",
    "UsersApp.AdminModule",
    "UsersApp.UsersModule",
    "UsersApp.CommonModule",
    "UsersApp.Helpers",
    "UsersApp.ModernWidget"
  ]);

  angular.module(moduleName).config([
    "$locationProvider",
    ($locationProvider: ng.ILocationProvider) => {
      $locationProvider.hashPrefix("");
    }
  ]);

  angular.module(moduleName).directive("app", appDirective);
})();
