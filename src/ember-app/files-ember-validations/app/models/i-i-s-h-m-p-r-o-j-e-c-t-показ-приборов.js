import {
  defineNamespace,
  defineProjections,
  Model as ПоказПриборовMixin
} from '../mixins/regenerated/models/i-i-s-h-m-p-r-o-j-e-c-t-показ-приборов';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ПоказПриборовMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
