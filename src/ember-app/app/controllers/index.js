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
          caption: i18n.t('forms.application.sitemap.h-m-p-r-o-j-e-c-t.caption'),
          title: i18n.t('forms.application.sitemap.h-m-p-r-o-j-e-c-t.title'),
          children: [{
            link: 'i-i-s-h-m-p-r-o-j-e-c-t-прибор-учета-l',
            caption: i18n.t('forms.application.sitemap.h-m-p-r-o-j-e-c-t.i-i-s-h-m-p-r-o-j-e-c-t-прибор-учета-l.caption'),
            title: i18n.t('forms.application.sitemap.h-m-p-r-o-j-e-c-t.i-i-s-h-m-p-r-o-j-e-c-t-прибор-учета-l.title'),
            icon: 'table',
            children: null
          }, {
            link: 'i-i-s-h-m-p-r-o-j-e-c-t-здание-l',
            caption: i18n.t('forms.application.sitemap.h-m-p-r-o-j-e-c-t.i-i-s-h-m-p-r-o-j-e-c-t-здание-l.caption'),
            title: i18n.t('forms.application.sitemap.h-m-p-r-o-j-e-c-t.i-i-s-h-m-p-r-o-j-e-c-t-здание-l.title'),
            children: null
          }, {
            link: 'i-i-s-h-m-p-r-o-j-e-c-t-человек-l',
            caption: i18n.t('forms.application.sitemap.h-m-p-r-o-j-e-c-t.i-i-s-h-m-p-r-o-j-e-c-t-человек-l.caption'),
            title: i18n.t('forms.application.sitemap.h-m-p-r-o-j-e-c-t.i-i-s-h-m-p-r-o-j-e-c-t-человек-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-h-m-p-r-o-j-e-c-t-показ-приборов-l',
            caption: i18n.t('forms.application.sitemap.h-m-p-r-o-j-e-c-t.i-i-s-h-m-p-r-o-j-e-c-t-показ-приборов-l.caption'),
            title: i18n.t('forms.application.sitemap.h-m-p-r-o-j-e-c-t.i-i-s-h-m-p-r-o-j-e-c-t-показ-приборов-l.title'),
            icon: 'suitcase',
            children: null
          }, {
            link: 'i-i-s-h-m-p-r-o-j-e-c-t-приборы-зд-l',
            caption: i18n.t('forms.application.sitemap.h-m-p-r-o-j-e-c-t.i-i-s-h-m-p-r-o-j-e-c-t-приборы-зд-l.caption'),
            title: i18n.t('forms.application.sitemap.h-m-p-r-o-j-e-c-t.i-i-s-h-m-p-r-o-j-e-c-t-приборы-зд-l.title'),
            icon: 'edit',
            children: null
          }]
        }
      ]
    };
  }),
})