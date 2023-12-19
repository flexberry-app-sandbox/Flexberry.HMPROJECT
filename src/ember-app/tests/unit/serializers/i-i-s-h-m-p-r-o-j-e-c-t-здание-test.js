import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-h-m-p-r-o-j-e-c-t-здание', 'Unit | Serializer | i-i-s-h-m-p-r-o-j-e-c-t-здание', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-h-m-p-r-o-j-e-c-t-здание',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-h-m-p-r-o-j-e-c-t-t-уровень-заряда',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
