import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-h-m-p-r-o-j-e-c-t-показ-приборов', 'Unit | Model | i-i-s-h-m-p-r-o-j-e-c-t-показ-приборов', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-h-m-p-r-o-j-e-c-t-здание',
    'model:i-i-s-h-m-p-r-o-j-e-c-t-показ-приборов',
    'model:i-i-s-h-m-p-r-o-j-e-c-t-прибор-учета',
    'model:i-i-s-h-m-p-r-o-j-e-c-t-приборы-зд',
    'model:i-i-s-h-m-p-r-o-j-e-c-t-человек',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
