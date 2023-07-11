import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class GameRunnerComponent extends Component {
  @action
  playGame() {
    alert('Game has started!');
  }
}
