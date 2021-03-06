import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('trips/update-trip-form', 'Integration | Component | trips/update trip form', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{trips/update-trip-form}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#trips/update-trip-form}}
      template block text
    {{/trips/update-trip-form}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
