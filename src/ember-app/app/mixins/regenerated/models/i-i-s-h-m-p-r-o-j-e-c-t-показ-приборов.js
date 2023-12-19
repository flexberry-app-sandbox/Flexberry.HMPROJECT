import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  q: DS.attr('boolean'),
  дата: DS.attr('date'),
  м: DS.attr('decimal'),
  номер: DS.attr('number'),
  п: DS.attr('decimal'),
  т: DS.attr('decimal'),
  приборыЗд: DS.belongsTo('i-i-s-h-m-p-r-o-j-e-c-t-приборы-зд', { inverse: null, async: false })
});

export let ValidationRules = {
  q: {
    descriptionKey: 'models.i-i-s-h-m-p-r-o-j-e-c-t-показ-приборов.validations.q.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  дата: {
    descriptionKey: 'models.i-i-s-h-m-p-r-o-j-e-c-t-показ-приборов.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  м: {
    descriptionKey: 'models.i-i-s-h-m-p-r-o-j-e-c-t-показ-приборов.validations.м.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-h-m-p-r-o-j-e-c-t-показ-приборов.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  п: {
    descriptionKey: 'models.i-i-s-h-m-p-r-o-j-e-c-t-показ-приборов.validations.п.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  т: {
    descriptionKey: 'models.i-i-s-h-m-p-r-o-j-e-c-t-показ-приборов.validations.т.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true }),
    ],
  },
  приборыЗд: {
    descriptionKey: 'models.i-i-s-h-m-p-r-o-j-e-c-t-показ-приборов.validations.приборыЗд.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПоказПриборовE', 'i-i-s-h-m-p-r-o-j-e-c-t-показ-приборов', {
    номер: attr('Номер', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    м: attr('М', { index: 2 }),
    т: attr('Т', { index: 3 }),
    п: attr('П', { index: 4 }),
    q: attr('Q', { index: 5 }),
    приборыЗд: belongsTo('i-i-s-h-m-p-r-o-j-e-c-t-приборы-зд', 'Приборы зд', {
      номер: attr('Номер', { index: 7, hidden: true })
    }, { index: 6, displayMemberPath: 'номер' })
  });

  modelClass.defineProjection('ПоказПриборовL', 'i-i-s-h-m-p-r-o-j-e-c-t-показ-приборов', {
    номер: attr('Номер', { index: 0 }),
    дата: attr('Дата', { index: 1 }),
    м: attr('М', { index: 2 }),
    т: attr('Т', { index: 3 }),
    п: attr('П', { index: 4 }),
    q: attr('Q', { index: 5 }),
    приборыЗд: belongsTo('i-i-s-h-m-p-r-o-j-e-c-t-приборы-зд', 'Номер', {
      номер: attr('Номер', { index: 6 })
    }, { index: -1, hidden: true })
  });
};
