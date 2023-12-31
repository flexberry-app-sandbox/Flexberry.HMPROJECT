import {
  defineNamespace,
  defineProjections,
  Model as ЗданиеMixin
} from '../mixins/regenerated/models/i-i-s-h-m-p-r-o-j-e-c-t-здание';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ЗданиеMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
