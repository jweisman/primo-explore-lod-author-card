const LCNAF_PREFIX = /https?:\/\/id\.loc\.gov\//
const SECTION_TITLE = 'More about this author';

class LodAuthorCardController {

  loading = false;
  bibcard = null;
  searchUrl = `/discovery/search?vid=${this.parentCtrl.configurationUtil.vid}`;
  parentElement = null;

  constructor($http, $scope, $element, options) {
    this.$http = $http;
    this.$scope = $scope;
    this.$element = $element;
    this.options = options;
    this.parentElement = this.$element.parent().parent()[0];
  }

  $onInit() {
    this.loading = true;      
    const mms = this.parentCtrl.item.pnx.display.mms[0];
    const inst = this.parentCtrl.configurationUtil.vid.split(':')[0];
    this.$http.get(`https://open-na.hosted.exlibrisgroup.com/alma/${inst}/bibs/${mms}`)
    .then( data => {
      let jsonld = data.data;
      let creator;
      if (Array.isArray(jsonld.creator)) {
        creator = jsonld.creator.find( v => v['@id'] && v['@id'].match(LCNAF_PREFIX));
      } else if (jsonld.creator && jsonld.creator['@id'] && jsonld.creator['@id'].match(LCNAF_PREFIX)) {
        creator = jsonld.creator;
      }
      if (creator) return creator['@id'];
      else throw "No LC Names URI found";
    })
    .then( uri => this.$http.get(this.options.bibcardApi + uri))
    .then( data => this.bibcard = data.data )
    .catch( e => console.warn(e) )
    .finally( () => {
      this.loading = false;
      this.moveElement();
    });
  }

  /* Borrowed from https://github.com/uleodolter/primo-studio-altmetrics */
  moveElement() {
    try {
      /* Add service section */
      this.parentCtrl.services.splice(this.parentCtrl.services.length, 0, 
        {
        scrollId: "lodAuthorCard",
        serviceName: "lodAuthorCard",
        title: SECTION_TITLE
        });
      /* move our widget into the new service section */
      let unbindWatcher = this.$scope.$watch(() => 
        this.parentElement.querySelector(`h4[translate="${SECTION_TITLE}"]`),
        (newVal, _oldVal) => {
          if (newVal) {
            /* Get the section body associated with the value we're watching */
            let sectionBody = newVal.parentElement.parentElement.parentElement.parentElement.children[1];
            console.log('watcher', newVal, sectionBody)
            if (sectionBody && sectionBody.appendChild) {
                sectionBody.appendChild(this.$element[0]);
            }
            unbindWatcher();
          }
        }
      );
    } catch(e) {
      console.warn('Error moving open data element', e.message);
    }
  }
}

LodAuthorCardController.$inject = [
  '$http', '$scope', '$element', 'LodAuthorCardOptions'
]



export default LodAuthorCardController;
