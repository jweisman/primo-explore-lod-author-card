import { LodAuthorCardModule } from './lod-author-card.module';

/* Required for modules used by Primo Studio */
try {
  if (app && app.requires) {
    app.requires.push(LodAuthorCardModule.name);
  }
} catch(e) { }
