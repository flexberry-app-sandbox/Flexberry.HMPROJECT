import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'HMPROJECT',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'HMPROJECT',
          title: 'HMPROJECT'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
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
