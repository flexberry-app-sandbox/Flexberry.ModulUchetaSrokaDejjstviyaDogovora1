import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  idДиректора: DS.attr('number'),
  имя: DS.attr('string'),
  номерПаспорта: DS.attr('number'),
  номерТелефона: DS.attr('string'),
  отчество: DS.attr('string'),
  серияПаспорта: DS.attr('number'),
  фамилия: DS.attr('string')
});

export let ValidationRules = {
  idДиректора: {
    descriptionKey: 'models.директор.validations.idДиректора.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  имя: {
    descriptionKey: 'models.директор.validations.имя.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номерПаспорта: {
    descriptionKey: 'models.директор.validations.номерПаспорта.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  номерТелефона: {
    descriptionKey: 'models.директор.validations.номерТелефона.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  отчество: {
    descriptionKey: 'models.директор.validations.отчество.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  серияПаспорта: {
    descriptionKey: 'models.директор.validations.серияПаспорта.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  фамилия: {
    descriptionKey: 'models.директор.validations.фамилия.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДирОтдПоРабСКлE', 'директор', {
    idДиректора: attr('Id директора', { index: 0 }),
    фамилия: attr('Фамилия', { index: 1 }),
    имя: attr('Имя', { index: 2 }),
    отчество: attr('Отчество', { index: 3 }),
    номерТелефона: attr('Номер телефона', { index: 4 }),
    номерПаспорта: attr('Номер паспорта', { index: 5 }),
    серияПаспорта: attr('Серия паспорта', { index: 6 })
  });

  modelClass.defineProjection('ДирОтдПоРабСКлL', 'директор', {
    idДиректора: attr('Id директора', { index: 0 }),
    фамилия: attr('Фамилия', { index: 1 }),
    имя: attr('Имя', { index: 2 }),
    отчество: attr('Отчество', { index: 3 }),
    номерТелефона: attr('Номер телефона', { index: 4 }),
    номерПаспорта: attr('Номер паспорта', { index: 5 }),
    серияПаспорта: attr('Серия паспорта', { index: 6 })
  });
};
