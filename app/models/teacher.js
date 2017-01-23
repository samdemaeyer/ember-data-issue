import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),

  students: DS.hasMany('student'),
  school: DS.belongsTo('school'),
  classgroup: DS.belongsTo('classgroup')
});
