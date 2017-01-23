import Ember from 'ember';
import { task, all } from 'ember-concurrency';

export default Ember.Component.extend({
  tagName: 'li',
  showForm: false,
  store: Ember.inject.service(),

  actions: {
    replaceStudent(teacher) {
      this.get('replaceStudentTask').perform(teacher);
    },

    replaceSchool(teacher) {
      this.get('replaceSchoolTask').perform(teacher);
    },

    replaceClassgroup(teacher) {
      this.get('replaceClassgroupTask').perform(teacher);
    }
  },

  // Tasks
  replaceStudentTask: task(function* (teacher) {
    let promisses = [];
    teacher.get('students').forEach(student => {
      promisses.push(student.destroyRecord());
    });
    try {
      yield all(promisses);

      let student = this.get('store').createRecord('student', {
        name: this.get('newStudentName'),
        teachers: [teacher]
      });
      this.set('newStudentName', '');
      yield student.save();
    } catch (e) {
      console.warn(e);
    }
  }),

  replaceSchoolTask: task(function* (teacher) {
    try {
      yield teacher.get('school.content').destroyRecord();
      let school = this.get('store').createRecord('school', {
        name: this.get('newSchoolName'),
        teachers: [teacher]
      });
      this.set('newSchoolName', '');
      yield school.save();
    } catch (e) {
      console.warn(e);
    }
  }),

  replaceClassgroupTask: task(function* (teacher) {
    try {
      yield teacher.get('classgroup.content').destroyRecord();
      let classgroup = this.get('store').createRecord('classgroup', {
        name: this.get('newSchoolName'),
        teacher: teacher
      });
      this.set('newClassgroupName', '');
      yield classgroup.save();
    } catch (e) {
      console.warn(e);
    }
  })
});
