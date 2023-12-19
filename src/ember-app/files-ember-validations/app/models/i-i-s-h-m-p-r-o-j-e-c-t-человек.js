import {
  defineNamespace,
  defineProjections,
  Model as ЧеловекMixin
} from '../mixins/regenerated/models/i-i-s-h-m-p-r-o-j-e-c-t-человек';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ЧеловекMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
