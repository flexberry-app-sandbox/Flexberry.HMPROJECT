import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ПоказПриборовMixin
} from '../mixins/regenerated/models/i-i-s-h-m-p-r-o-j-e-c-t-показ-приборов';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ПоказПриборовMixin, Validations, {
});

defineProjections(Model);

export default Model;
