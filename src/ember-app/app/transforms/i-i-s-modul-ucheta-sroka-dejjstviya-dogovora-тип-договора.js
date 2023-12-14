import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ТипДоговораEnum from '../enums/i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-тип-договора';

export default FlexberryEnum.extend({
  enum: ТипДоговораEnum,
  sourceType: 'IIS._Modul_ucheta_sroka_dejjstviya_dogovora.ТипДоговора'
});
