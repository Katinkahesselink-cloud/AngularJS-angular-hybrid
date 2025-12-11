import * as angular from 'angular';
import 'angular-route';

declare global {
    interface Window {
        angular: typeof angular;
    }
}

window.angular = angular;