import Route from '@ember/routing/route';

export default class PlayRoute extends Route {
  model() {
    return ['Barney', 'Frank', 'Phil'];
  }
}
