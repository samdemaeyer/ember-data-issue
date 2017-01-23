export default function(server) {
  server.loadFixtures('teachers');
  server.loadFixtures('students');
  server.loadFixtures('schools');
  server.loadFixtures('classgroups');
}
