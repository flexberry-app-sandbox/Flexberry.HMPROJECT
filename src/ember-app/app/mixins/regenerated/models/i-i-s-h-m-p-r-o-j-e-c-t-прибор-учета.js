import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  название: DS.attr('string'),
  номер: DS.attr('number'),
  приборыЗд: DS.belongsTo('i-i-s-h-m-p-r-o-j-e-c-t-приборы-зд', { inverse: null, async: false })
});

export let ValidationRules = {
  название: {
    descriptionKey: 'models.i-i-s-h-m-p-r-o-j-e-c-t-прибор-учета.validations.название.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  номер: {
    descriptionKey: 'models.i-i-s-h-m-p-r-o-j-e-c-t-прибор-учета.validations.номер.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  приборыЗд: {
    descriptionKey: 'models.i-i-s-h-m-p-r-o-j-e-c-t-прибор-учета.validations.приборыЗд.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ПриборУчетаE', 'i-i-s-h-m-p-r-o-j-e-c-t-прибор-учета', {
    номер: attr('Номер', { index: 0 }),
    название: attr('Название', { index: 1 }),
    приборыЗд: belongsTo('i-i-s-h-m-p-r-o-j-e-c-t-приборы-зд', 'Приборы зд', {
      номер: attr('Номер', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'номер' })
  });

  modelClass.defineProjection('ПриборУчетаL', 'i-i-s-h-m-p-r-o-j-e-c-t-прибор-учета', {
    номер: attr('Номер', { index: 0 }),
    название: attr('Название', { index: 1 }),
    приборыЗд: belongsTo('i-i-s-h-m-p-r-o-j-e-c-t-приборы-зд', 'Номер', {
      номер: attr('Номер', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
