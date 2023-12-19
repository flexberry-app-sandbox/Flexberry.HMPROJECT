import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  ммакс: DS.attr('decimal'),
  ммин: DS.attr('decimal'),
  номер: DS.attr('number'),
  пмакс: DS.attr('decimal'),
  пмин: DS.attr('decimal'),
  тмакс: DS.attr('decimal'),
  тмин: DS.attr('decimal'),
  уровеньЗаряда: DS.attr('i-i-s-h-m-p-r-o-j-e-c-t-t-уровень-заряда'),
  здание: DS.belongsTo('i-i-s-h-m-p-r-o-j-e-c-t-здание', { inverse: null, async: false })
});

export let ValidationRules = {
  ммакс: {
    descriptionKey: 'models.i-i-s-h-m-p-r-o-j-e-c-t-приборы-зд.validations.ммакс.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  ммин: {
    descriptionKey: 'models.i-i-s-h-m-p-r-o-j-e-c-t-приборы-зд.validations.ммин.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-h-m-p-r-o-j-e-c-t-приборы-зд.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  пмакс: {
    descriptionKey: 'models.i-i-s-h-m-p-r-o-j-e-c-t-приборы-зд.validations.пмакс.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  пмин: {
    descriptionKey: 'models.i-i-s-h-m-p-r-o-j-e-c-t-приборы-зд.validations.пмин.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  тмакс: {
    descriptionKey: 'models.i-i-s-h-m-p-r-o-j-e-c-t-приборы-зд.validations.тмакс.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  тмин: {
    descriptionKey: 'models.i-i-s-h-m-p-r-o-j-e-c-t-приборы-зд.validations.тмин.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  уровеньЗаряда: {
    descriptionKey: 'models.i-i-s-h-m-p-r-o-j-e-c-t-приборы-зд.validations.уровеньЗаряда.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  здание: {
    descriptionKey: 'models.i-i-s-h-m-p-r-o-j-e-c-t-приборы-зд.validations.здание.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПриборыЗдE', 'i-i-s-h-m-p-r-o-j-e-c-t-приборы-зд', {
    номер: attr('Номер', { index: 0 }),
    ммакс: attr('Ммакс', { index: 1 }),
    ммин: attr('Ммин', { index: 2 }),
    тмакс: attr('Тмакс', { index: 3 }),
    тмин: attr('Тмин', { index: 4 }),
    пмакс: attr('Пмакс', { index: 5 }),
    пмин: attr('Пмин', { index: 6 }),
    уровеньЗаряда: attr('Уровень заряда', { index: 7 }),
    здание: belongsTo('i-i-s-h-m-p-r-o-j-e-c-t-здание', 'Здание', {
      улица: attr('Улица', { index: 9, hidden: true })
    }, { index: 8, displayMemberPath: 'улица' })
  });

  modelClass.defineProjection('ПриборыЗдL', 'i-i-s-h-m-p-r-o-j-e-c-t-приборы-зд', {
    номер: attr('Номер', { index: 0 }),
    ммакс: attr('Ммакс', { index: 1 }),
    ммин: attr('Ммин', { index: 2 }),
    тмакс: attr('Тмакс', { index: 3 }),
    тмин: attr('Тмин', { index: 4 }),
    пмакс: attr('Пмакс', { index: 5 }),
    пмин: attr('Пмин', { index: 6 }),
    уровеньЗаряда: attr('Уровень заряда', { index: 7 }),
    здание: belongsTo('i-i-s-h-m-p-r-o-j-e-c-t-здание', 'Улица', {
      улица: attr('Улица', { index: 8 })
    }, { index: -1, hidden: true })
  });
};
