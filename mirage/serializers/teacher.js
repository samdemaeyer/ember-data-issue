import BaseSerializer from './application';

export default BaseSerializer.extend({
  include: ['students', 'school', 'classgroup']
});
