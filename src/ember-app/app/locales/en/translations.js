import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISHMPROJECTЗданиеLForm from './forms/i-i-s-h-m-p-r-o-j-e-c-t-здание-l';
import IISHMPROJECTПоказПриборовLForm from './forms/i-i-s-h-m-p-r-o-j-e-c-t-показ-приборов-l';
import IISHMPROJECTПриборУчетаLForm from './forms/i-i-s-h-m-p-r-o-j-e-c-t-прибор-учета-l';
import IISHMPROJECTПриборыЗдLForm from './forms/i-i-s-h-m-p-r-o-j-e-c-t-приборы-зд-l';
import IISHMPROJECTЧеловекLForm from './forms/i-i-s-h-m-p-r-o-j-e-c-t-человек-l';
import IISHMPROJECTЗданиеEForm from './forms/i-i-s-h-m-p-r-o-j-e-c-t-здание-e';
import IISHMPROJECTПоказПриборовEForm from './forms/i-i-s-h-m-p-r-o-j-e-c-t-показ-приборов-e';
import IISHMPROJECTПриборУчетаEForm from './forms/i-i-s-h-m-p-r-o-j-e-c-t-прибор-учета-e';
import IISHMPROJECTПриборыЗдEForm from './forms/i-i-s-h-m-p-r-o-j-e-c-t-приборы-зд-e';
import IISHMPROJECTЧеловекEForm from './forms/i-i-s-h-m-p-r-o-j-e-c-t-человек-e';
import IISHMPROJECTЗданиеModel from './models/i-i-s-h-m-p-r-o-j-e-c-t-здание';
import IISHMPROJECTПоказПриборовModel from './models/i-i-s-h-m-p-r-o-j-e-c-t-показ-приборов';
import IISHMPROJECTПриборУчетаModel from './models/i-i-s-h-m-p-r-o-j-e-c-t-прибор-учета';
import IISHMPROJECTПриборыЗдModel from './models/i-i-s-h-m-p-r-o-j-e-c-t-приборы-зд';
import IISHMPROJECTЧеловекModel from './models/i-i-s-h-m-p-r-o-j-e-c-t-человек';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-h-m-p-r-o-j-e-c-t-здание': IISHMPROJECTЗданиеModel,
    'i-i-s-h-m-p-r-o-j-e-c-t-показ-приборов': IISHMPROJECTПоказПриборовModel,
    'i-i-s-h-m-p-r-o-j-e-c-t-прибор-учета': IISHMPROJECTПриборУчетаModel,
    'i-i-s-h-m-p-r-o-j-e-c-t-приборы-зд': IISHMPROJECTПриборыЗдModel,
    'i-i-s-h-m-p-r-o-j-e-c-t-человек': IISHMPROJECTЧеловекModel
  },

  'application-name': 'HMPROJECT',

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
        'application-name': 'HMPROJECT',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'HMPROJECT',
          title: 'HMPROJECT'
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
        'h-m-p-r-o-j-e-c-t': {
          caption: 'HMPROJECT',
          title: 'HMPROJECT',
          'i-i-s-h-m-p-r-o-j-e-c-t-прибор-учета-l': {
            caption: 'Прибор учета',
            title: ''
          },
          'i-i-s-h-m-p-r-o-j-e-c-t-здание-l': {
            caption: 'Здание',
            title: ''
          },
          'i-i-s-h-m-p-r-o-j-e-c-t-человек-l': {
            caption: 'Человек',
            title: ''
          },
          'i-i-s-h-m-p-r-o-j-e-c-t-показ-приборов-l': {
            caption: 'Показ приборов',
            title: ''
          },
          'i-i-s-h-m-p-r-o-j-e-c-t-приборы-зд-l': {
            caption: 'Приборы зд',
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
    'i-i-s-h-m-p-r-o-j-e-c-t-здание-l': IISHMPROJECTЗданиеLForm,
    'i-i-s-h-m-p-r-o-j-e-c-t-показ-приборов-l': IISHMPROJECTПоказПриборовLForm,
    'i-i-s-h-m-p-r-o-j-e-c-t-прибор-учета-l': IISHMPROJECTПриборУчетаLForm,
    'i-i-s-h-m-p-r-o-j-e-c-t-приборы-зд-l': IISHMPROJECTПриборыЗдLForm,
    'i-i-s-h-m-p-r-o-j-e-c-t-человек-l': IISHMPROJECTЧеловекLForm,
    'i-i-s-h-m-p-r-o-j-e-c-t-здание-e': IISHMPROJECTЗданиеEForm,
    'i-i-s-h-m-p-r-o-j-e-c-t-показ-приборов-e': IISHMPROJECTПоказПриборовEForm,
    'i-i-s-h-m-p-r-o-j-e-c-t-прибор-учета-e': IISHMPROJECTПриборУчетаEForm,
    'i-i-s-h-m-p-r-o-j-e-c-t-приборы-зд-e': IISHMPROJECTПриборыЗдEForm,
    'i-i-s-h-m-p-r-o-j-e-c-t-человек-e': IISHMPROJECTЧеловекEForm
  },

});

export default translations;
