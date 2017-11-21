//main.js
angular
    .module('app')
    .controller('usersTableCtrl', usersTableCtrl)
    .controller('trafficDemoCtrl', trafficDemoCtrl)
    .controller('siteDetailsCtrl', siteDetailsCtrl)
    .controller('sidenavCtrl',sidenavCtrl);

let role = 'management';
sidenavCtrl.$inject = ['$scope', '$role'];

function sidenavCtrl($scope, $role){
    $scope.role = $role;
}

siteDetailsCtrl.$inject = ['$scope', '$timeout', 'SiteService'];

function siteDetailsCtrl($scope, $timeout, SiteService) {

    $scope.getSites = function () {
        SiteService.get().then(sites => {
            console.log(sites)
            $scope.sites = sites;
        })
    };

}


usersTableCtrl.$inject = ['$scope', '$timeout'];

function usersTableCtrl($scope, $timeout) {

    $scope.users = [{
            avatar: '1.jpg',
            status: 'active',
            name: 'Yiorgos Avraamu',
            new: true,
            registered: 'Jan 1, 2015',
            country: 'USA',
            flag: 'USA.png',
            usage: '50',
            period: 'Jun 11, 2015 - Jul 10, 2015',
            payment: 'mastercard',
            activity: '10 sec ago',
            satisfaction: '48'
        },
        {
            avatar: '2.jpg',
            status: 'busy',
            name: 'Avram Tarasios',
            new: false,
            registered: 'Jan 1, 2015',
            country: 'Brazil',
            flag: 'Brazil.png',
            usage: '10',
            period: 'Jun 11, 2015 - Jul 10, 2015',
            payment: 'visa',
            activity: '5 minutes ago',
            satisfaction: '61'
        },
        {
            avatar: '2.jpg',
            status: 'busy',
            name: 'Avram Tarasios',
            new: false,
            registered: 'Jan 1, 2015',
            country: 'Brazil',
            flag: 'Brazil.png',
            usage: '10',
            period: 'Jun 11, 2015 - Jul 10, 2015',
            payment: 'visa',
            activity: '5 minutes ago',
            satisfaction: '61'
        },
        {
            avatar: '2.jpg',
            status: 'busy',
            name: 'Avram Tarasios',
            new: false,
            registered: 'Jan 1, 2015',
            country: 'Brazil',
            flag: 'Brazil.png',
            usage: '10',
            period: 'Jun 11, 2015 - Jul 10, 2015',
            payment: 'visa',
            activity: '5 minutes ago',
            satisfaction: '61'
        },
        {
            avatar: '2.jpg',
            status: 'busy',
            name: 'Avram Tarasios',
            new: false,
            registered: 'Jan 1, 2015',
            country: 'Brazil',
            flag: 'Brazil.png',
            usage: '10',
            period: 'Jun 11, 2015 - Jul 10, 2015',
            payment: 'visa',
            activity: '5 minutes ago',
            satisfaction: '61'
        },
        {
            avatar: '2.jpg',
            status: 'busy',
            name: 'Avram Tarasios',
            new: false,
            registered: 'Jan 1, 2015',
            country: 'Brazil',
            flag: 'Brazil.png',
            usage: '10',
            period: 'Jun 11, 2015 - Jul 10, 2015',
            payment: 'visa',
            activity: '5 minutes ago',
            satisfaction: '61'
        },
        {
            avatar: '3.jpg',
            status: 'away',
            name: 'Quintin Ed',
            new: true,
            registered: 'Jan 1, 2015',
            country: 'India',
            flag: 'India.png',
            usage: '74',
            period: 'Jun 11, 2015 - Jul 10, 2015',
            payment: 'stripe',
            activity: '1 hour ago',
            satisfaction: '33'
        },
        {
            avatar: '4.jpg',
            status: 'offline',
            name: 'Enéas Kwadwo',
            new: true,
            registered: 'Jan 1, 2015',
            country: 'France',
            flag: 'France.png',
            usage: '98',
            period: 'Jun 11, 2015 - Jul 10, 2015',
            payment: 'paypal',
            activity: 'Last month',
            satisfaction: '23'
        },
        {
            avatar: '5.jpg',
            status: 'active',
            name: 'Agapetus Tadeáš',
            new: true,
            registered: 'Jan 1, 2015',
            country: 'Spain',
            flag: 'Spain.png',
            usage: '22',
            period: 'Jun 11, 2015 - Jul 10, 2015',
            payment: 'google',
            activity: 'Last week',
            satisfaction: '78'
        },
        {
            avatar: '6.jpg',
            status: 'busy',
            name: 'Friderik Dávid',
            new: true,
            registered: 'Jan 1, 2015',
            country: 'Poland',
            flag: 'Poland.png',
            usage: '43',
            period: 'Jun 11, 2015 - Jul 10, 2015',
            payment: 'amex',
            activity: 'Yesterday',
            satisfaction: '11'
        },
        {
            avatar: '5.jpg',
            status: 'active',
            name: 'Agapetus Tadeáš',
            new: true,
            registered: 'Jan 1, 2015',
            country: 'Spain',
            flag: 'Spain.png',
            usage: '22',
            period: 'Jun 11, 2015 - Jul 10, 2015',
            payment: 'google',
            activity: 'Last week',
            satisfaction: '78'
        },
        {
            avatar: '6.jpg',
            status: 'busy',
            name: 'Friderik Dávid',
            new: true,
            registered: 'Jan 1, 2015',
            country: 'Poland',
            flag: 'Poland.png',
            usage: '43',
            period: 'Jun 11, 2015 - Jul 10, 2015',
            payment: 'amex',
            activity: 'Yesterday',
            satisfaction: '11'
        },
        {
            avatar: '5.jpg',
            status: 'active',
            name: 'Agapetus Tadeáš',
            new: true,
            registered: 'Jan 1, 2015',
            country: 'Spain',
            flag: 'Spain.png',
            usage: '22',
            period: 'Jun 11, 2015 - Jul 10, 2015',
            payment: 'google',
            activity: 'Last week',
            satisfaction: '78'
        },
        {
            avatar: '6.jpg',
            status: 'busy',
            name: 'Friderik Dávid',
            new: true,
            registered: 'Jan 1, 2015',
            country: 'Poland',
            flag: 'Poland.png',
            usage: '43',
            period: 'Jun 11, 2015 - Jul 10, 2015',
            payment: 'amex',
            activity: 'Yesterday',
            satisfaction: '11'
        },
        {
            avatar: '5.jpg',
            status: 'active',
            name: 'Agapetus Tadeáš',
            new: true,
            registered: 'Jan 1, 2015',
            country: 'Spain',
            flag: 'Spain.png',
            usage: '22',
            period: 'Jun 11, 2015 - Jul 10, 2015',
            payment: 'google',
            activity: 'Last week',
            satisfaction: '78'
        },
        {
            avatar: '6.jpg',
            status: 'busy',
            name: 'Friderik Dávid',
            new: true,
            registered: 'Jan 1, 2015',
            country: 'Poland',
            flag: 'Poland.png',
            usage: '43',
            period: 'Jun 11, 2015 - Jul 10, 2015',
            payment: 'amex',
            activity: 'Yesterday',
            satisfaction: '11'
        }
    ]
}

trafficDemoCtrl.$inject = ['$scope'];

function trafficDemoCtrl($scope) {

    function random(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    function convertHex(hex, opacity) {
        hex = hex.replace('#', '');
        r = parseInt(hex.substring(0, 2), 16);
        g = parseInt(hex.substring(2, 4), 16);
        b = parseInt(hex.substring(4, 6), 16);

        result = 'rgba(' + r + ',' + g + ',' + b + ',' + opacity / 100 + ')';
        return result;
    }

    var elements = 27;
    var data1 = [];
    var data2 = [];
    var data3 = [];

    for (var i = 0; i <= elements; i++) {
        data1.push(random(50, 200));
        data2.push(random(80, 100));
        data3.push(65);
    }

    $scope.labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Thursday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    $scope.series = ['Current', 'Previous', 'BEP'];
    $scope.data = [data1, data2, data3];
    $scope.colors = [{
        backgroundColor: convertHex(brandInfo, 10),
        borderColor: brandInfo,
        pointHoverBackgroundColor: '#fff'

    }, {
        backgroundColor: 'transparent',
        borderColor: brandSuccess,
        pointHoverBackgroundColor: '#fff'
    }, {
        backgroundColor: 'transparent',
        borderColor: brandDanger,
        pointHoverBackgroundColor: '#fff',
        borderWidth: 1,
        borderDash: [8, 5]
    }];
    $scope.options = {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            xAxes: [{
                gridLines: {
                    drawOnChartArea: false,
                },
                ticks: {
                    callback: function (value) {
                        return value.charAt(0);
                    }
                }
            }],
            yAxes: [{
                ticks: {
                    beginAtZero: true,
                    maxTicksLimit: 5,
                    stepSize: Math.ceil(250 / 5),
                    max: 250
                }
            }]
        },
        elements: {
            point: {
                radius: 0,
                hitRadius: 10,
                hoverRadius: 4,
                hoverBorderWidth: 3,
            }
        },
    }
}