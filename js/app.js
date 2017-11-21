// Default colors
var brandPrimary = '#20a8d8';
var brandSuccess = '#4dbd74';
var brandInfo = '#63c2de';
var brandWarning = '#f8cb00';
var brandDanger = '#f86c6b';

var grayDark = '#2a2c36';
var gray = '#55595c';
var grayLight = '#818a91';
var grayLighter = '#d1d4d7';
var grayLightest = '#f8f9fa';

angular
    .module('app', [
        'ui.router',
        'ui.router.state.events',
        'oc.lazyLoad',
        'ncy-angular-breadcrumb',
        'angular-loading-bar',
        'angularUtils.directives.dirPagination',
        'ngCookies',
        'ui.bootstrap',
        'ngSanitize',
        'ngAnimate',
        'ui-notification'

    ])
    .config(['cfpLoadingBarProvider','NotificationProvider', function (cfpLoadingBarProvider,NotificationProvider) {
        NotificationProvider.setOptions({
            delay: 10000,
            startTop: 10,
            startRight: 10,
            verticalSpacing: 20,
            horizontalSpacing: 20,
            positionX: 'center',
            positionY: 'top'
        });
        cfpLoadingBarProvider.includeSpinner = false;
        cfpLoadingBarProvider.latencyThreshold = 1;
    }])
    .run(['$rootScope', '$state', '$stateParams', '$cookieStore', '$http', function ($rootScope, $state, $stateParams, $cookieStore, $http) {
        console.log($state);
        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata;
        }

        $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams) {
            if (toState.name !== 'appSimple.login' && !$rootScope.globals.currentUser ) {
                event.preventDefault();
                $state.go('appSimple.login');
                document.body.scrollTop = document.documentElement.scrollTop = 0;
            }
            console.log('toState.name: ' + toState.name);
            console.log('fromState.name: ' + fromState.name)
        });

        $rootScope.$state = $state;
        return $rootScope.$stateParams = $stateParams;


    }]);
