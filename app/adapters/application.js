import Ember from 'ember';
import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';
import ENV from "../config/environment";

export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
  authorizer: 'authorizer:application',
  host:       ENV.serverURL,
  namespace:  ENV.apiNamespace, // optional for namespace APIs
  pathForType(type) {
    let underscored = Ember.String.underscore(type);
    return Ember.String.pluralize(underscored);
  }
});
