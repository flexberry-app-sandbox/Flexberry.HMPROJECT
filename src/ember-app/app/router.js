import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-h-m-p-r-o-j-e-c-t-здание-l');
  this.route('i-i-s-h-m-p-r-o-j-e-c-t-здание-e',
  { path: 'i-i-s-h-m-p-r-o-j-e-c-t-здание-e/:id' });
  this.route('i-i-s-h-m-p-r-o-j-e-c-t-здание-e.new',
  { path: 'i-i-s-h-m-p-r-o-j-e-c-t-здание-e/new' });
  this.route('i-i-s-h-m-p-r-o-j-e-c-t-показ-приборов-l');
  this.route('i-i-s-h-m-p-r-o-j-e-c-t-показ-приборов-e',
  { path: 'i-i-s-h-m-p-r-o-j-e-c-t-показ-приборов-e/:id' });
  this.route('i-i-s-h-m-p-r-o-j-e-c-t-показ-приборов-e.new',
  { path: 'i-i-s-h-m-p-r-o-j-e-c-t-показ-приборов-e/new' });
  this.route('i-i-s-h-m-p-r-o-j-e-c-t-прибор-учета-l');
  this.route('i-i-s-h-m-p-r-o-j-e-c-t-прибор-учета-e',
  { path: 'i-i-s-h-m-p-r-o-j-e-c-t-прибор-учета-e/:id' });
  this.route('i-i-s-h-m-p-r-o-j-e-c-t-прибор-учета-e.new',
  { path: 'i-i-s-h-m-p-r-o-j-e-c-t-прибор-учета-e/new' });
  this.route('i-i-s-h-m-p-r-o-j-e-c-t-приборы-зд-l');
  this.route('i-i-s-h-m-p-r-o-j-e-c-t-приборы-зд-e',
  { path: 'i-i-s-h-m-p-r-o-j-e-c-t-приборы-зд-e/:id' });
  this.route('i-i-s-h-m-p-r-o-j-e-c-t-приборы-зд-e.new',
  { path: 'i-i-s-h-m-p-r-o-j-e-c-t-приборы-зд-e/new' });
  this.route('i-i-s-h-m-p-r-o-j-e-c-t-человек-l');
  this.route('i-i-s-h-m-p-r-o-j-e-c-t-человек-e',
  { path: 'i-i-s-h-m-p-r-o-j-e-c-t-человек-e/:id' });
  this.route('i-i-s-h-m-p-r-o-j-e-c-t-человек-e.new',
  { path: 'i-i-s-h-m-p-r-o-j-e-c-t-человек-e/new' });
});

export default Router;
