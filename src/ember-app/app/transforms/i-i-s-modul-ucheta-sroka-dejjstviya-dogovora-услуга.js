import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import УслугаEnum from '../enums/i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-услуга';

export default FlexberryEnum.extend({
  enum: УслугаEnum,
  sourceType: 'IIS._Modul_ucheta_sroka_dejjstviya_dogovora.Услуга'
});
