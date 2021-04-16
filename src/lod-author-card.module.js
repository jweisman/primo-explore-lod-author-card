import LodAuthorCardComponent from './lod-author-card.component';
import controller from './lod-author-card.controller';
import { environment } from './environment';
import { camelCase } from 'lodash';

const { name } = require('../package.json');
const componentName = camelCase(name);

export const LodAuthorCardModule = 
angular.module('lodAuthorCard', [])
.constant('LodAuthorCardOptions', environment)
.filter('escape', () => window.encodeURIComponent)
.filter('secureSrc', () => input => input.substr(input.indexOf(':')+1));

/* Update dependencies with Primo Studio Config instead of $attrs */
const attr = controller.$inject.indexOf('$attrs');
const configName = `${componentName}StudioConfig`;
if (angular.injector().has(configName) && ~attr) {
  console.log('inside injector');
  controller.$inject[attr] = configName;
}

angular.module('lodAuthorCard')
.component(componentName, LodAuthorCardComponent);

