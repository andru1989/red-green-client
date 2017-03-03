import DS from 'ember-data';

export default DS.Model.extend({
  changeType: DS.attr('string'),
  entryDate:  DS.attr('string'),
  value:      DS.attr('number') //cents
});
