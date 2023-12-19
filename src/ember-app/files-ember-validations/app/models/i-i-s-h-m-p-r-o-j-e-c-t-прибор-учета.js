import {
  defineNamespace,
  defineProjections,
  Model as ПриборУчетаMixin
} from '../mixins/regenerated/models/i-i-s-h-m-p-r-o-j-e-c-t-прибор-учета';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ПриборУчетаMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
