import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-оказ-услуг', 'Unit | Model | i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-оказ-услуг', {
  // Specify the other units that are required for this test.
  needs: [
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
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
