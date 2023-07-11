import { module, test } from 'qunit';
import { setupTest } from 'afghan-three-card-flash/tests/helpers';

module('Unit | Route | play', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:play');
    assert.ok(route);
  });
});
