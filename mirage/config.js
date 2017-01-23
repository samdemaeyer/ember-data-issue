export default function() {
  this.get('/teachers');

  this.get('/schools');
  this.post('/schools');
  this.del('/schools/:id');

  this.get('/students');
  this.post('/students');
  this.get('/students/:id');
  this.del('/students/:id');

  this.get('/classgroups');
  this.post('/classgroups');
  this.del('/classgroups/:id');
}
