import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  договор: DS.belongsTo('i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-договор', { inverse: null, async: false }),
  услуги: DS.belongsTo('i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-услуги', { inverse: null, async: false }),
  расчетОстВрем: DS.belongsTo('i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-расчет-ост-врем', { inverse: 'оказУслуг', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-оказ-услуг.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  договор: {
    descriptionKey: 'models.i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-оказ-услуг.validations.договор.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  услуги: {
    descriptionKey: 'models.i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-оказ-услуг.validations.услуги.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  расчетОстВрем: {
    descriptionKey: 'models.i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-оказ-услуг.validations.расчетОстВрем.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ОказУслугE', 'i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-оказ-услуг', {
    дата: attr('Дата', { index: 0 }),
    услуги: belongsTo('i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-услуги', 'Наименование услуги', {
      затрВрем: attr('Затраченное время', { index: 2 }),
      едВремени: attr('Единица времени', { index: 3 })
    }, { index: 1, displayMemberPath: 'наименование' })
  });
};
