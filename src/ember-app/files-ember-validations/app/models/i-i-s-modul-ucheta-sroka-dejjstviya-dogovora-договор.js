import {
  defineNamespace,
  defineProjections,
  Model as ДоговорMixin
} from '../mixins/regenerated/models/i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-договор';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ДоговорMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
