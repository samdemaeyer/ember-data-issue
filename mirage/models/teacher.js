import { Model, hasMany, belongsTo } from 'ember-cli-mirage';

export default Model.extend({
  students: hasMany('student'),
  school: belongsTo('school'),
  classgroup: belongsTo('classgroup')
});
