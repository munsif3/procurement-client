
angular
.module('app')
.config(['$stateProvider', '$urlRouterProvider', '$ocLazyLoadProvider', '$breadcrumbProvider', function($stateProvider, $urlRouterProvider, $ocLazyLoadProvider, $breadcrumbProvider) {
  $stateProvider

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
        .state('app.management.viewPurchaseOrders', {
            url: '/purchase/view',
            templateUrl: 'views/management/purchaseorder/purchaseorders.view.html',
            ncyBreadcrumb: {
                label: 'View Purchase Orders'
            }
        })
        .state('app.management.viewPurchaseOrder', {
            url: '/purchase/view/{purchaseOrderId}',
            templateUrl: 'views/management/purchaseorder/purchaseorder.view.html',
            ncyBreadcrumb: {
                label: 'View Purchase Order'
            }
        })




        .state('app.admin', {
            url: "/admin",
            abstract: true,
            template: '<ui-view></ui-view>',
            ncyBreadcrumb: {
                label: 'Admin'
            }
        })
        .state('app.admin.department', {
            url: '/department/view',
            templateUrl: 'views/Admin/department.html',
            ncyBreadcrumb: {
                label: 'Add Supplier Item'
            }
        })
        .state('app.admin.departmentUpdate', {
            url: '/department/update/{department:json}',
            params:{department:null},
            templateUrl: 'views/Admin/departmentUpdateModal.html',
            ncyBreadcrumb: {
                label: 'Update Department'
            }
        })
        .state('app.admin.updateProject', {
            url: '/project/update/:id',

            templateUrl: 'views/Admin/projectUpdateModal.html',
            ncyBreadcrumb: {
                label: 'Projects'
            }
        })
        .state('app.admin.project', {
            url: '/project/view',
            templateUrl: 'views/Admin/project.html',
            ncyBreadcrumb: {
                label: 'Projects'
            }
        })
        .state('app.admin.user', {
            url: '/user/view',
            templateUrl: 'views/Admin/user.html',
            ncyBreadcrumb: {
                label: 'User'
            }
        })
      .state('app.admin.employee', {
          url: '/employee/view',
          templateUrl: 'views/Admin/employee.html',
          ncyBreadcrumb: {
              label: 'Employee'
          }
      })
      .state('app.admin.supplier', {
          url: '/supplier/view',
          templateUrl: 'views/Admin/supplier.html',
          ncyBreadcrumb: {
              label: 'Supplier'
          }
      })
      .state('app.admin.updateUser', {
          url: '/user/update/:id',

          templateUrl: 'views/Admin/userUpdateModal.html',
          ncyBreadcrumb: {
              label: 'User'
          }
      })
      .state('app.admin.updateEmployee', {
          url: '/employee/update/:id',

          templateUrl: 'views/Admin/employeeUpdateModal.html',
          ncyBreadcrumb: {
              label: 'Employee'
          }
      })
      .state('app.admin.updateSupplier', {
          url: '/supplier/update/:id',

          templateUrl: 'views/Admin/supplierUpdateModal.html',
          ncyBreadcrumb: {
              label: 'Supplier'
          }
      })
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

      .state('app.accounting.viewPurchasesHistory', {
          url: '/purchasesHistory/view',
          templateUrl: 'views/siteManager/purchasesHistory.view.html',
          ncyBreadcrumb: {
              label: 'View PurchasesHistory'
          }
      })

      .state('app.accounting.addRequisition', {
          url: '/requisition/add',
          templateUrl: 'views/siteManager/requisition.add.html',
          ncyBreadcrumb: {
              label: 'Add Requisition'
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

