import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ЕдВремениEnum from '../enums/i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-ед-времени';

export default FlexberryEnum.extend({
  enum: ЕдВремениEnum,
  sourceType: 'IIS._Modul_ucheta_sroka_dejjstviya_dogovora.ЕдВремени'
});
