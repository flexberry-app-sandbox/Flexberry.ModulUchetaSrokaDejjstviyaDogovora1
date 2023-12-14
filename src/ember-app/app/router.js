import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-дир-отд-по-раб-с-кл-l');
  this.route('i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-дир-отд-по-раб-с-кл-e',
  { path: 'i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-дир-отд-по-раб-с-кл-e/:id' });
  this.route('i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-дир-отд-по-раб-с-кл-e.new',
  { path: 'i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-дир-отд-по-раб-с-кл-e/new' });
  this.route('i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-договор-l');
  this.route('i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-договор-e',
  { path: 'i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-договор-e/:id' });
  this.route('i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-договор-e.new',
  { path: 'i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-договор-e/new' });
  this.route('i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-клиент-l');
  this.route('i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-клиент-e',
  { path: 'i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-клиент-e/:id' });
  this.route('i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-клиент-e.new',
  { path: 'i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-клиент-e/new' });
  this.route('i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-расчет-ост-врем-l');
  this.route('i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-расчет-ост-врем-e',
  { path: 'i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-расчет-ост-врем-e/:id' });
  this.route('i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-расчет-ост-врем-e.new',
  { path: 'i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-расчет-ост-врем-e/new' });
  this.route('i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-услуги-l');
  this.route('i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-услуги-e',
  { path: 'i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-услуги-e/:id' });
  this.route('i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-услуги-e.new',
  { path: 'i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-услуги-e/new' });
});

export default Router;
