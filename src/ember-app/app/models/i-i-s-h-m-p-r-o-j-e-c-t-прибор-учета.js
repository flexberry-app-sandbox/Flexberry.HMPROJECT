import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as ПриборУчетаMixin
} from '../mixins/regenerated/models/i-i-s-h-m-p-r-o-j-e-c-t-прибор-учета';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ПриборУчетаMixin, Validations, {
});

defineProjections(Model);

export default Model;
