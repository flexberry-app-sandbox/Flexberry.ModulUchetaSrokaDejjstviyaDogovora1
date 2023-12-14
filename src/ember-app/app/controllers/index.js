import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.справочники.caption'),
          title: i18n.t('forms.application.sitemap.справочники.title'),
          children: [{
            link: 'i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-клиент-l',
            caption: i18n.t('forms.application.sitemap.справочники.i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-клиент-l.caption'),
            title: i18n.t('forms.application.sitemap.справочники.i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-клиент-l.title'),
            icon: 'book',
            children: null
          }, {
            link: 'i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-дир-отд-по-раб-с-кл-l',
            caption: i18n.t('forms.application.sitemap.справочники.i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-дир-отд-по-раб-с-кл-l.caption'),
            title: i18n.t('forms.application.sitemap.справочники.i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-дир-отд-по-раб-с-кл-l.title'),
            icon: 'address card',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.договоры.caption'),
          title: i18n.t('forms.application.sitemap.договоры.title'),
          children: [{
            link: 'i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-расчет-ост-врем-l',
            caption: i18n.t('forms.application.sitemap.договоры.i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-расчет-ост-врем-l.caption'),
            title: i18n.t('forms.application.sitemap.договоры.i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-расчет-ост-врем-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-договор-l',
            caption: i18n.t('forms.application.sitemap.договоры.i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-договор-l.caption'),
            title: i18n.t('forms.application.sitemap.договоры.i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-договор-l.title'),
            icon: 'chart line',
            children: null
          }]
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.прочее.caption'),
          title: i18n.t('forms.application.sitemap.прочее.title'),
          children: [{
            link: 'i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-услуги-l',
            caption: i18n.t('forms.application.sitemap.прочее.i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-услуги-l.caption'),
            title: i18n.t('forms.application.sitemap.прочее.i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-услуги-l.title'),
            icon: 'list',
            children: null
          }]
        }
      ]
    };
  }),
})