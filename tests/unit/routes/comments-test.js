import { module, test } from 'qunit';
import { setupTest } from 'investigacion-ember/tests/helpers';

module('Unit | Route | Comments', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:comments');
    assert.ok(route);
  });
});
