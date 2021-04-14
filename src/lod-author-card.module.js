import LodAuthorCardComponent from './lod-author-card.component'
import { environment } from './environment';

export const LodAuthorCardModule = 
angular.module('lodAuthorCard', [])
.constant('LodAuthorCardOptions', environment)
.filter('escape', () => window.encodeURIComponent)
.filter('secureSrc', () => input => input.substr(input.indexOf(':')+1));

angular.module('lodAuthorCard')
.component(LodAuthorCardComponent.selector, LodAuthorCardComponent);
