import './lod-author-card.component.scss';
import controller from './lod-author-card.controller';
import template from './lod-author-card.component.html';

const LodAuthorCardComponent = {
  bindings: {parentCtrl: '<'},
  controller,
  template
}

export default LodAuthorCardComponent;