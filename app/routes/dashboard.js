import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  session: Ember.inject.service(),
  beforeModel(transition) {
    // trigger AuthenticatedRouteMixin's beforeModel
    this._super(...arguments);

    if (transition.targetName === 'dashboard.index') {
      this.transitionTo('dashboard.overview');
    }
  },
  actions: {
    logout() {
      this.get('session').invalidate();
    }
  }
});
