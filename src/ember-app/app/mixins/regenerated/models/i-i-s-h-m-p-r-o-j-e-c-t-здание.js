import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  адрес: DS.attr('number'),
  улица: DS.attr('string'),
  человек: DS.belongsTo('i-i-s-h-m-p-r-o-j-e-c-t-человек', { inverse: null, async: false })
});

export let ValidationRules = {
  адрес: {
    descriptionKey: 'models.i-i-s-h-m-p-r-o-j-e-c-t-здание.validations.адрес.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  улица: {
    descriptionKey: 'models.i-i-s-h-m-p-r-o-j-e-c-t-здание.validations.улица.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  человек: {
    descriptionKey: 'models.i-i-s-h-m-p-r-o-j-e-c-t-здание.validations.человек.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗданиеE', 'i-i-s-h-m-p-r-o-j-e-c-t-здание', {
    адрес: attr('Адрес', { index: 0 }),
    улица: attr('Улица', { index: 1 }),
    человек: belongsTo('i-i-s-h-m-p-r-o-j-e-c-t-человек', 'Человек', {
      номер: attr('Номер', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'номер' })
  });

  modelClass.defineProjection('ЗданиеL', 'i-i-s-h-m-p-r-o-j-e-c-t-здание', {
    адрес: attr('Адрес', { index: 0 }),
    улица: attr('Улица', { index: 1 }),
    человек: belongsTo('i-i-s-h-m-p-r-o-j-e-c-t-человек', 'Номер', {
      номер: attr('Номер', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
