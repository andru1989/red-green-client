import Ember from 'ember';
import UnauthenticatedRouteMixin from 'ember-simple-auth/mixins/unauthenticated-route-mixin';

export default Ember.Route.extend(UnauthenticatedRouteMixin, {
  session: Ember.inject.service(),
  actions: {
    login(email, password) {
      this.controller.set('isLogginIn', true);
      this.get('session').authenticate('authenticator:oauth2', email, password)
        .catch(()   => this.controller.set('errorMessage', 'Invalid login.'))
        .finally(() => this.controller.set('isLogginIn', false));
    }
  }
});
