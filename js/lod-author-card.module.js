angular
  .module("lodAuthorCard", [])
  .filter('escape', function() {
    return window.encodeURIComponent;
  })
  .filter('secureSrc', function() {
    return function(input) {
      return input.substr(input.indexOf(':')+1);
    };
  })
  .constant('lodAuthorCardOptions', 
    {
      "bibcardApi": "https://api.exldevnetwork.net/bibcard/?uri="
    }
  )
  .controller('LodAuthorCardComponentController', [
    '$http', '$scope', 'lodAuthorCardOptions', 
    function ($http, $scope, lodAuthorCardOptions) {
      var vm = this;
      var LCNAF_PREFIX = /https?:\/\/id\.loc\.gov\//
      var mms = vm.parentCtrl.item.pnx.display.mms[0];
      var inst = vm.parentCtrl.configurationUtil.vid.split(':')[0];
      vm.searchUrl = '/discovery/search?vid='+vm.parentCtrl.configurationUtil.vid;
      var jsonldUrl = 'https://open-na.hosted.exlibrisgroup.com/alma/'+inst+'/bibs/'+mms;
      $scope.loading = true;
      $http.get(jsonldUrl).then(
          function (data) {
              var jsonld = data.data;
              var creator;
              if (Array.isArray(jsonld.creator)) {
                  creator = jsonld.creator.find(function(v){return v['@id'] && v['@id'].match(LCNAF_PREFIX)});
              } else if (jsonld.creator['@id'] && jsonld.creator['@id'].match(LCNAF_PREFIX)) {
                  creator = jsonld.creator;
              }
              if (creator) return creator['@id'];
              else throw "No LC Names URI found";
          }
      )
      .then( function(uri) { return $http.get(lodAuthorCardOptions.bibcardApi + uri) })
      .then( function(data) { $scope.bibcard = data.data })
      .catch( function(e) { console.warn(e) })
      .finally( function() { $scope.loading = false });
    }
  ])
  .component('lodAuthorCardComponent', {
    bindings: {parentCtrl: '<'},
    controller: 'LodAuthorCardComponentController',
    template: '\
    <div class="full-view-section lod-author-card" flex-md="80" flex-lg="80" flex-xl="80" flex>\
    <div class="layout-full-width full-view-section-content">\
      <div class="section-header" layout="row" layout-align="center center">\
        <h2 class="section-title md-title light-text">\
          More information about the author:\
        </h2>\
        <md-divider flex></md-divider>\
      </div>\
      <div class="section-body" layout="row">\
        <div ng-if="!loading">\
          <span ng-if="!bibcard">No further information is available for this author</span>\
          <md-card ng-if="bibcard">\
            <md-card-title>\
              <md-card-title-text>\
                <span class="md-headline">{{bibcard.name}}</span>\
                <span class="md-subhead">{{bibcard.wikidata_entity.description}}\
                  ({{bibcard.birth_date | date:\'mediumDate\'}}-{{bibcard.death_date | date:\'mediumDate\'}})</span>\
              </md-card-title-text>\
            </md-card-title>\
            <md-card-content>\
              <div layout="row" layout-xs="column">\
                <div flex="" class="lod-author-card-abstract">\
                  {{bibcard.dbpedia_resource.abstract}}\
                </div>\
                <div flex="33">\
                  <img ng-src="{{bibcard.dbpedia_resource.depiction|secureSrc}}" style="width: 100%">\
                </div>\
              </div>\
              <div ng-if="bibcard.wikidata_entity.notable_works && bibcard.wikidata_entity.notable_works.length>0">\
                <span class="md-subhead">Notable works</span>\
                <ul>\
                  <li ng-repeat="work in bibcard.wikidata_entity.notable_works">\
                    <a ng-href="{{$ctrl.searchUrl + \'&query=title,contains,\' + (work | escape)}}"\
                      target="_blank">{{work}}</a>\
                  </li>\
                </ul>\
              </div>\
            </md-card-content>\
          </md-card>\
        </div>\
        <md-progress-circular ng-if="loading" md-mode="indeterminate"></md-progress-circular>\
      </div>\
    </div>\
  </div>\
  '
});