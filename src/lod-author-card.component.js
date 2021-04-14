import './lod-author-card.component.scss';
import controller from './lod-author-card.controller';
import template from './lod-author-card.component.html';

const LodAuthorCardComponent = {
  selector: 'lodAuthorCardComponent',
  bindings: {parentCtrl: '<'},
  controller,
  template
}

export default LodAuthorCardComponent;