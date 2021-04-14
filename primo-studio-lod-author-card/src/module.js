import LodAuthorCardComponent from '../../src/lod-author-card.component';
import controller from '../../src/lod-author-card.controller';
import { } from './module';
import { camelCase } from 'lodash';
import { LodAuthorCardModule } from '../../src/lod-author-card.module';

const { name } = require('../package.json');
const componentName = camelCase(name);

/* Update dependencies with Primo Studio Congif instead of $attrs */
const attr = controller.$inject.indexOf('$attrs');
if (~attr) controller.$inject[attr] = `${componentName}StudioConfig`;

/* Add component with component name by convention */
export const lodAuthorCard = LodAuthorCardModule
.component(componentName, LodAuthorCardComponent);


