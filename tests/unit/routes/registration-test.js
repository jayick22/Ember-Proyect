import { module, test } from 'qunit';
import { setupTest } from 'investigacion-ember/tests/helpers';

module('Unit | Route | Registration', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:registration');
    assert.ok(route);
  });
});
