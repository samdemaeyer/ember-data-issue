import { Model, hasMany } from 'ember-cli-mirage';

export default Model.extend({
  teachers: hasMany('teacher')
});
