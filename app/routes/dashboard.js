import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  session: Ember.inject.service(),
  queryParams: {
    period: {
      refreshModel: true
    }
  },
  beforeModel(transition) {
    // trigger AuthenticatedRouteMixin's beforeModel
    this._super(...arguments);

    if (transition.targetName === 'dashboard.index') {
      this.transitionTo('dashboard.overview');
    }
  },
  model(params) {
    //return this.store.findAll('balance-change');
    return this.store.query('balance-change', { filter: { period: params.period } });
  },
  actions: {
    logout() {
      this.get('session').invalidate();
    }
  }
});
