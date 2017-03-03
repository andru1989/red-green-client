import DS from 'ember-data';

export default DS.Model.extend({
  currency: DS.attr('string'),
  email: DS.attr('string')
});
