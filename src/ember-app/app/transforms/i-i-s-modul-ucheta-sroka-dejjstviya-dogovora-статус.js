import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import СтатусEnum from '../enums/i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-статус';

export default FlexberryEnum.extend({
  enum: СтатусEnum,
  sourceType: 'IIS._Modul_ucheta_sroka_dejjstviya_dogovora.Статус'
});
