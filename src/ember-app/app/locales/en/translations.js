import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IIS_Modul_ucheta_sroka_dejjstviya_dogovoraДирОтдПоРабСКлLForm from './forms/i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-дир-отд-по-раб-с-кл-l';
import IIS_Modul_ucheta_sroka_dejjstviya_dogovoraДоговорLForm from './forms/i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-договор-l';
import IIS_Modul_ucheta_sroka_dejjstviya_dogovoraКлиентLForm from './forms/i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-клиент-l';
import IIS_Modul_ucheta_sroka_dejjstviya_dogovoraРасчетОстВремLForm from './forms/i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-расчет-ост-врем-l';
import IIS_Modul_ucheta_sroka_dejjstviya_dogovoraУслугиLForm from './forms/i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-услуги-l';
import IIS_Modul_ucheta_sroka_dejjstviya_dogovoraДирОтдПоРабСКлEForm from './forms/i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-дир-отд-по-раб-с-кл-e';
import IIS_Modul_ucheta_sroka_dejjstviya_dogovoraДоговорEForm from './forms/i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-договор-e';
import IIS_Modul_ucheta_sroka_dejjstviya_dogovoraКлиентEForm from './forms/i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-клиент-e';
import IIS_Modul_ucheta_sroka_dejjstviya_dogovoraРасчетОстВремEForm from './forms/i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-расчет-ост-врем-e';
import IIS_Modul_ucheta_sroka_dejjstviya_dogovoraУслугиEForm from './forms/i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-услуги-e';
import IIS_Modul_ucheta_sroka_dejjstviya_dogovoraДирОтдПоРабСКлModel from './models/i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-дир-отд-по-раб-с-кл';
import IIS_Modul_ucheta_sroka_dejjstviya_dogovoraДоговорModel from './models/i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-договор';
import IIS_Modul_ucheta_sroka_dejjstviya_dogovoraКлиентModel from './models/i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-клиент';
import IIS_Modul_ucheta_sroka_dejjstviya_dogovoraОказУслугModel from './models/i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-оказ-услуг';
import IIS_Modul_ucheta_sroka_dejjstviya_dogovoraРасчетОстВремModel from './models/i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-расчет-ост-врем';
import IIS_Modul_ucheta_sroka_dejjstviya_dogovoraУслугиModel from './models/i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-услуги';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-дир-отд-по-раб-с-кл': IIS_Modul_ucheta_sroka_dejjstviya_dogovoraДирОтдПоРабСКлModel,
    'i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-договор': IIS_Modul_ucheta_sroka_dejjstviya_dogovoraДоговорModel,
    'i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-клиент': IIS_Modul_ucheta_sroka_dejjstviya_dogovoraКлиентModel,
    'i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-оказ-услуг': IIS_Modul_ucheta_sroka_dejjstviya_dogovoraОказУслугModel,
    'i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-расчет-ост-врем': IIS_Modul_ucheta_sroka_dejjstviya_dogovoraРасчетОстВремModel,
    'i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-услуги': IIS_Modul_ucheta_sroka_dejjstviya_dogovoraУслугиModel
  },

  'application-name': '_ modul_ucheta_sroka_dejjstviya_dogovora',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': '_ modul_ucheta_sroka_dejjstviya_dogovora',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: '_ modul_ucheta_sroka_dejjstviya_dogovora',
          title: '_ modul_ucheta_sroka_dejjstviya_dogovora'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'modul-ucheta-sroka-dejjstviya-dogovora': {
          caption: '_Modul_ucheta_sroka_dejjstviya_dogovora',
          title: '_Modul_ucheta_sroka_dejjstviya_dogovora',
          'i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-услуги-l': {
            caption: 'Услуги',
            title: ''
          },
          'i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-клиент-l': {
            caption: 'Клиент',
            title: ''
          },
          'i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-дир-отд-по-раб-с-кл-l': {
            caption: 'Дир отд по раб с кл',
            title: ''
          },
          'i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-расчет-ост-врем-l': {
            caption: 'Расчет ост врем',
            title: ''
          },
          'i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-договор-l': {
            caption: 'Договор',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-дир-отд-по-раб-с-кл-l': IIS_Modul_ucheta_sroka_dejjstviya_dogovoraДирОтдПоРабСКлLForm,
    'i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-договор-l': IIS_Modul_ucheta_sroka_dejjstviya_dogovoraДоговорLForm,
    'i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-клиент-l': IIS_Modul_ucheta_sroka_dejjstviya_dogovoraКлиентLForm,
    'i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-расчет-ост-врем-l': IIS_Modul_ucheta_sroka_dejjstviya_dogovoraРасчетОстВремLForm,
    'i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-услуги-l': IIS_Modul_ucheta_sroka_dejjstviya_dogovoraУслугиLForm,
    'i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-дир-отд-по-раб-с-кл-e': IIS_Modul_ucheta_sroka_dejjstviya_dogovoraДирОтдПоРабСКлEForm,
    'i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-договор-e': IIS_Modul_ucheta_sroka_dejjstviya_dogovoraДоговорEForm,
    'i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-клиент-e': IIS_Modul_ucheta_sroka_dejjstviya_dogovoraКлиентEForm,
    'i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-расчет-ост-врем-e': IIS_Modul_ucheta_sroka_dejjstviya_dogovoraРасчетОстВремEForm,
    'i-i-s-modul-ucheta-sroka-dejjstviya-dogovora-услуги-e': IIS_Modul_ucheta_sroka_dejjstviya_dogovoraУслугиEForm
  },

});

export default translations;
