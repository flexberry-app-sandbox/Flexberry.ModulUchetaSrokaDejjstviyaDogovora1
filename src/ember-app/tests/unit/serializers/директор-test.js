import { moduleForModel, test } from 'ember-qunit';

moduleForModel('директор', 'Unit | Serializer | директор', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:директор',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-ед-времени',
    'transform:i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-статус',
    'transform:i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-тип-договора',
    'transform:i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-услуга',

    'model:i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-дир-отд-по-раб-с-кл',
    'model:i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-договор',
    'model:i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-клиент',
    'model:i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-оказ-услуг',
    'model:i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-расчет-ост-врем',
    'model:i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-услуги',
    'model:директор',
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
