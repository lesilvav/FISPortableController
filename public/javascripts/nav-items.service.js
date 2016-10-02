(function(){
  'use strict';

  angular.module('starterApp')
         .service('navItemsService', ['$q', NavItemsService]);

  /**
   * Nav Items DataService
   * Uses embedded, hard-coded data model; acts asynchronously to simulate
   * remote data service call(s).
   *
   * @returns {{loadAll: Function}}
   * @constructor
   */
  function NavItemsService($q){
    var items = [
      {
        id: "fi",
        name: 'Runs in the RIG',
        icon: 'runlist'
      },
      {
        id: "dv",
        name: 'Device management',
        icon: 'mngdevice'
      },
      {
        id: "st",
        name: 'Settings',
        icon: 'setting'
      }
    ];

    // Promise-based API
    return {
      loadAllItems : function() {
        // Simulate async nature of real remote calls
        return $q.when(items);
      }
    };
  }

})();