angular
.module('app')
.config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', '$breadcrumbProvider', function($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, $breadcrumbProvider) {
  $stateProvider
  
//munsif
  .state('app.management', {
    url: "/management",
    abstract: true,
    template: '<ui-view></ui-view>',
    ncyBreadcrumb: {
      label: 'Management'
    }
  })
  .state('app.management.viewSites', {
    url: '/sites/view',
    templateUrl: 'views/management/sites/sites.view.html',
    ncyBreadcrumb: {
      label: 'View Site'
    }
  })
  .state('app.management.addSites', {
    url: '/sites/add',
    templateUrl: 'views/management/sites/sites.add.html',
    ncyBreadcrumb: {
      label: 'Add Site'
    }
  })
  
  .state('app.management.viewCatalogueItems', {
    url: '/catalogue/items/view',
    templateUrl: 'views/management/itemcatalogue/itemcatalogue.view.html',
    ncyBreadcrumb: {
      label: 'View Catalogue Item'
    }
  }) 
  .state('app.management.addCatalogueItems', {
    url: '/catalogue/items/add',
    templateUrl: 'views/management/itemcatalogue/itemcatalogue.add.html',
    ncyBreadcrumb: {
      label: 'Add Catalogue Item'
    }
  })

  .state('app.management.viewSupplierItems', {
    url: '/supplier/items/view',
    templateUrl: 'views/management/supplieritem/supplieritems.view.html',
    ncyBreadcrumb: {
      label: 'View Supplier Item'
    }
  }) 
  .state('app.management.addSupplierItems', {
    url: '/supplier/items/add',
    templateUrl: 'views/management/supplieritem/supplieritems.add.html',
    ncyBreadcrumb: {
      label: 'Add Supplier Item'
    }
  })

//sara
.state('app.accounting', {
  url: "/accounting",
  abstract: true,
  template: '<ui-view></ui-view>',
  ncyBreadcrumb: {
    label: 'Accounting'
  }
})

.state('app.accounting.viewRequisitions', {
  url: '/requisitions/view',
  templateUrl: 'views/procurement-team/requisitions/requisitions.view.html',
  ncyBreadcrumb: {
    label: 'View Requisitions'
  }
})
.state('app.accounting.viewQuotations', {
  url: '/quotations/view',
  templateUrl: 'views/procurement-team/quotations/quotations.view.html',
  ncyBreadcrumb: {
    label: 'View Quotations'
  }
})
.state('app.accounting.addQuotations', {
  url: '/quotations/add',
  templateUrl: 'views/procurement-team/quotations/quotations.add.html',
  ncyBreadcrumb: {
    label: 'Add Quotations'
  }
})
.state('app.accounting.sendQuotations', {
  url: '/quotations/send',
  templateUrl: 'views/procurement-team/quotations/quotations.send.html',
  ncyBreadcrumb: {
    label: 'Send Quotations'
  }
})
.state('app.accounting.viewPurchases', {
  url: '/purchases/view',
  templateUrl: 'views/procurement-team/purchases/purchases.view.html',
  ncyBreadcrumb: {
    label: 'View Purchases'
  }
})










  .state('app.charts', {
    url: '/charts',
    templateUrl: 'views/charts.html',
    ncyBreadcrumb: {
      label: 'Charts'
    },
    resolve: {
      // Plugins loaded before
      // loadPlugin: ['$ocLazyLoad', function ($ocLazyLoad) {
      //     return $ocLazyLoad.load([
      //         {
      //             serial: true,
      //             files: ['js/libs/Chart.min.js', 'js/libs/angular-chart.min.js']
      //         }
      //     ]);
      // }],
      loadMyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
        // you can lazy load files for an existing module
        return $ocLazyLoad.load({
          files: ['js/controllers/charts.js']
        });
      }]
    }
  })
}]);
