import EmberRouter from '@ember/routing/router';
import config from 'investigacion-ember/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('Index');
  this.route('Services');
  this.route('Comments');
  this.route('Registration');
});
